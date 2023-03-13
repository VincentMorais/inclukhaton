"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const https_credential_1 = require("./https.credential");
const https = require("https");
const favicon = require("serve-favicon");
const express = require("express");
const routes_helper_1 = require("./provider/routes.helper");
const Sentry = require("@sentry/node");
const http = require("http");
const staticFolders = [(0, path_1.join)(__dirname, '../../public'), (0, path_1.join)(__dirname, '../../uploaded_files')];
async function bootstrap() {
    const server = express();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server), {
        logger: ['error', 'warn'],
    });
    app.setGlobalPrefix(routes_helper_1.API_ENDPOINT);
    app.useStaticAssets((0, path_1.join)(__dirname, '../../public'));
    app.useStaticAssets((0, path_1.join)(__dirname, '../../public/compiled'));
    app.useStaticAssets((0, path_1.join)(__dirname, '../../uploaded_files'));
    app.setBaseViewsDir(staticFolders);
    app.use(favicon((0, path_1.join)(__dirname, '../../public/img/companies/', 'incluscore.png')));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    if (process.env.NODE_ENV === 'PROD') {
        app.enable('trust proxy');
        app.use((req, res, next) => {
            req.secure ? next() : res.redirect('https://' + req.headers.host + req.url);
        });
    }
    await app.init();
    prodSetup(server);
    http.createServer(server).listen(4000);
    console.debug('Environnement: ', process.env.NODE_ENV || 'DEV', process.env.npm_package_version);
}
function prodSetup(server) {
    if (process.env.NODE_ENV !== 'PROD') {
        return;
    }
    Sentry.init({
        release: process.env.npm_package_name + '@' + process.env.npm_package_version,
        dsn: (0, https_credential_1.getSentryDsn)(),
        tracesSampleRate: 1.0,
    });
    https.createServer((0, https_credential_1.getCredentials)(), server).listen(443);
}
bootstrap().then();
//# sourceMappingURL=main.js.map