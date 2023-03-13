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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("../service/user.service");
const save_user_dto_1 = require("../dto/save.user.dto");
const company_service_1 = require("../../company/company.service");
const login_service_1 = require("../../login/login.service");
const routes_helper_1 = require("../../provider/routes.helper");
const LangUtils_1 = require("../../translations/LangUtils");
const bcrypt = require('bcrypt');
let UserController = class UserController {
    constructor(userService, companyService, loginService) {
        this.userService = userService;
        this.companyService = companyService;
        this.loginService = loginService;
    }
    async save(saveUserDto) {
        saveUserDto._id = saveUserDto.id;
        saveUserDto.email = saveUserDto.email.toLowerCase();
        if (!saveUserDto.id && !saveUserDto.pwd) {
            saveUserDto.hasAPassword = false;
            const tmpHashedPwd = await bcrypt.hash('qÏé5kQ5', login_service_1.LoginService.SALT);
            saveUserDto.pwd = tmpHashedPwd + new Date().getTime();
        }
        delete saveUserDto.avatarImgPath;
        delete saveUserDto.presentationVideoPath;
        delete saveUserDto.juryOfTeams;
        delete saveUserDto.manageTeams;
        const isCreation = !saveUserDto._id;
        const companyId = saveUserDto.companyId;
        if (!isCreation) {
            const updatedUserDb = await this.userService.save(saveUserDto);
            return new user_dto_1.UserDto(updatedUserDb);
        }
        const existingUser = await this.userService.findByEmail(saveUserDto.email);
        if (!existingUser) {
            const newUserDb = await this.userService.save(saveUserDto);
            await this.companyService.addUser(companyId, newUserDb);
        }
        const userTry = {
            email: saveUserDto.email,
            pwd: saveUserDto.pwd,
        };
        const userTried = await this.loginService.getAuthenticatedUser(userTry);
        if (userTried.error) {
            return userTried;
        }
        const loginDb = await this.loginService.connect(userTry);
        if (loginDb.error) {
            return loginDb;
        }
        const loginUser = loginDb;
        const userDb = await this.userService.findOne(loginUser.userId);
        const userDto = new user_dto_1.UserDto(userDb, loginUser.token);
        return userDto;
    }
    async setLang(userId, lang) {
        await this.userService.setLang(userId, lang);
    }
    async addJury(userId, teamId) {
        const user = await this.userService.findOne(userId);
        if (!user) {
            return null;
        }
        user.juryOfTeams = user.juryOfTeams.push(teamId);
        return await this.userService.save(user);
    }
    async addManager(userId, teamId) {
        const user = await this.userService.findOne(userId);
        if (!user) {
            return null;
        }
        user.manageTeams = user.manageTeams.push(teamId);
        return await this.userService.save(user);
    }
    async migrateTeams() {
        this.userService.teamsIdsToTeam().then();
    }
    async hasAChosenPassword(email) {
        const userDb = await this.userService.findByEmail(email);
        return !userDb ? null : new user_dto_1.UserDto(userDb);
    }
    async findAll() {
        const usersDbs = await this.userService.findAll();
        return usersDbs.map((u) => new user_dto_1.UserDto(u));
    }
    async deleteAndCleanRefs(id) {
        const uDbs = await this.userService.deleteAndCleanRefs(id);
        return uDbs.map((u) => new user_dto_1.UserDto(u));
    }
    async removeJury(userId, teamId) {
        const user = await this.userService.findOne(userId);
        if (!user) {
            return null;
        }
        user.juryOfTeams = user.juryOfTeams.filter((team) => teamId !== team.id.toString('hex'));
        return await this.userService.save(user);
    }
    async removeManager(userId, teamId) {
        const user = await this.userService.findOne(userId);
        if (!user) {
            return null;
        }
        user.manageTeams = user.manageTeams.filter((team) => teamId !== team.id.toString('hex'));
        return await this.userService.save(user);
    }
    async updateNps(userId, notation, comment, step) {
        if (step === 1) {
            return this.userService.updateNpsNotation(userId, notation);
        }
        return this.userService.updateNpsComment(userId, comment);
    }
    async findOne(id) {
        const userDb = await this.userService.findOne(id);
        return new user_dto_1.UserDto(userDb);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_user_dto_1.SaveUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('set-lang'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('lang')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "setLang", null);
__decorate([
    (0, common_1.Post)('add-jury'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addJury", null);
__decorate([
    (0, common_1.Post)('add-manager'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addManager", null);
__decorate([
    (0, common_1.Get)('/migration-teams'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "migrateTeams", null);
__decorate([
    (0, common_1.Get)(`/${routes_helper_1.HAS_A_CHOSEN_PASSWORD_ENDPOINT}/:email`),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "hasAChosenPassword", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteAndCleanRefs", null);
__decorate([
    (0, common_1.Delete)('remove-jury'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeJury", null);
__decorate([
    (0, common_1.Delete)('remove-manager'),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeManager", null);
__decorate([
    (0, common_1.Post)('/nps'),
    __param(0, (0, common_1.Body)('current-user-id')),
    __param(1, (0, common_1.Body)('notation')),
    __param(2, (0, common_1.Body)('comment')),
    __param(3, (0, common_1.Body)('step')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateNps", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
UserController = __decorate([
    (0, common_1.Controller)(routes_helper_1.USER_CTRL),
    __metadata("design:paramtypes", [user_service_1.UserService,
        company_service_1.CompanyService,
        login_service_1.LoginService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map