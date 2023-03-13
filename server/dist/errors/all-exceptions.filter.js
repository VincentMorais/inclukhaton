"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const Sentry = require("@sentry/node");
const user_service_1 = require("../user/service/user.service");
let AllExceptionsFilter = class AllExceptionsFilter extends core_1.BaseExceptionFilter {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    sendSentryLog(e, method, url, query, params, body, user) {
        var _a;
        const transaction = Sentry.startTransaction({
            op: 'Error caught by AllExceptionsFilter',
            name: 'An error occurred',
        });
        body.pwd = '********';
        body.password = '********';
        Sentry.setContext('error-context', {
            method,
            url,
            query,
            params,
            body,
            currentDate: new Date(),
            firstName: user === null || user === void 0 ? void 0 : user.firstName,
            lastName: user === null || user === void 0 ? void 0 : user.lastName,
            email: user === null || user === void 0 ? void 0 : user.email,
            company: (_a = user === null || user === void 0 ? void 0 : user.companyId) === null || _a === void 0 ? void 0 : _a.name,
        });
        if (user) {
            delete user.pwd;
            delete user.password;
        }
        Sentry.setUser(Object.assign({}, user));
        Sentry.captureException(e);
        transaction.finish();
    }
    async catch(exception, host) {
        var _a, _b;
        super.catch(exception, host);
        if (process.env.NODE_ENV === 'PROD') {
            const hostInfo = ((_a = host) === null || _a === void 0 ? void 0 : _a.args) ? (_b = host) === null || _b === void 0 ? void 0 : _b.args[0] : null;
            let user;
            if ((hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.query) && (hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.query['current-user-id'])) {
                user = await this.userService.findOne(hostInfo.query['current-user-id']);
            }
            this.sendSentryLog(exception, hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.method, hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.url, hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.query, hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.params, hostInfo === null || hostInfo === void 0 ? void 0 : hostInfo.body, user);
        }
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map