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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const connect_dto_1 = require("./dto/connect.dto");
const login_service_1 = require("./login.service");
const launch_inclukathon_service_1 = require("../inclukathon-program/launch/launch.inclukathon.service");
const user_service_1 = require("../user/service/user.service");
const user_dto_1 = require("../user/dto/user.dto");
const routes_helper_1 = require("../provider/routes.helper");
let LoginController = class LoginController {
    constructor(loginService, launchInclukathonService, userService) {
        this.loginService = loginService;
        this.launchInclukathonService = launchInclukathonService;
        this.userService = userService;
    }
    async checkConnexion(userId, token, isVeryLightUserQuery) {
        if (!(await this.loginService.checkConnexion(userId, token))) {
            return null;
        }
        const userDb = await this.userService.findOne(userId, isVeryLightUserQuery);
        const userDto = new user_dto_1.UserDto(userDb, token);
        return Object.assign(Object.assign({}, userDto), { currentInclukathon: isVeryLightUserQuery
                ? {}
                : await this.launchInclukathonService.retrieveLastInProgressInclukathon(userDto), teamsToManage: isVeryLightUserQuery ? {} : await this.userService.getTeamsToManage(userDto) });
    }
    async connect(connectDto) {
        const loginDb = await this.loginService.connect(connectDto);
        if (loginDb.error) {
            return loginDb;
        }
        const loginUser = loginDb;
        const userDb = await this.userService.findOne(loginUser.userId);
        const userDto = new user_dto_1.UserDto(userDb, loginUser.token);
        return Object.assign(Object.assign({}, userDto), { currentInclukathon: await this.launchInclukathonService.retrieveLastInProgressInclukathon(userDto), teamsToManage: await this.userService.getTeamsToManage(userDto) });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('current-user-id')),
    __param(1, (0, common_1.Query)('token')),
    __param(2, (0, common_1.Query)('very-light-user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "checkConnexion", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.CONNECT_LOGIN_ENDPOINT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [connect_dto_1.ConnectDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "connect", null);
LoginController = __decorate([
    (0, common_1.Controller)(routes_helper_1.LOGIN_CTRL),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        launch_inclukathon_service_1.LaunchInclukathonService,
        user_service_1.UserService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map