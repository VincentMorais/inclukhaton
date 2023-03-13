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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LoginService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const collections_provider_1 = require("../provider/collections.provider");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const create_login_dto_1 = require("./dto/create-login.dto");
const luxon_1 = require("luxon");
const bcrypt = require('bcrypt');
let LoginService = LoginService_1 = class LoginService {
    constructor(userDb, loginDb) {
        this.userDb = userDb;
        this.loginDb = loginDb;
    }
    async checkConnexion(userId, token) {
        return null != (await this.loginDb.findOne({ userId, token }));
    }
    async getAuthenticatedUser(connectDto, saveNewPwd = false) {
        connectDto.email = connectDto.email.toLowerCase();
        const userVerification = await this.userDb.findOne({ email: connectDto.email, enabled: true }).exec();
        if (!userVerification) {
            return {
                error: true,
                reason: 'Aucun utilisateur ne correspond a cet email',
            };
        }
        if (userVerification.hasAPassword) {
            const match = await bcrypt.compare(connectDto.pwd, userVerification.pwd);
            if (!match) {
                return {
                    error: true,
                    reason: 'Veuillez verifier votre adresse mail et votre mot de passe',
                };
            }
        }
        else if (saveNewPwd) {
            userVerification.pwd = await bcrypt.hash(connectDto.pwd, LoginService_1.SALT);
            userVerification.hasAPassword = true;
            await userVerification.save();
        }
        return userVerification;
    }
    async connect(connectDto) {
        const userVerification = await this.getAuthenticatedUser(connectDto, true);
        if (userVerification.error) {
            return userVerification;
        }
        const newLoginTokenDto = new create_login_dto_1.CreateLoginDto();
        newLoginTokenDto.userId = userVerification._id;
        newLoginTokenDto.token = await bcrypt.hash(luxon_1.DateTime.now().toSeconds().toString(), LoginService_1.SALT);
        const loginToken = new this.loginDb(newLoginTokenDto);
        await loginToken.save();
        return loginToken;
    }
    async deleteTokenOfUser(idUser) {
        await this.loginDb.deleteMany({ userId: idUser });
    }
};
LoginService.SALT = 10;
LoginService = LoginService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.USER_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.LOGIN_TOKENS_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map