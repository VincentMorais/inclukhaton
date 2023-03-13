"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentials = exports.getSentryDsn = void 0;
const fs = require("fs");
function getSentryDsn() {
    return '';
}
exports.getSentryDsn = getSentryDsn;
function getCredentials() {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live//privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live//cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live//chain.pem', 'utf8');
    return {
        key: privateKey,
        cert: certificate,
        ca: ca,
    };
}
exports.getCredentials = getCredentials;
//# sourceMappingURL=https.credential.js.map