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
exports.UserThemeController = void 0;
const common_1 = require("@nestjs/common");
const userTheme_service_1 = require("./userTheme.service");
const user_theme_dto_1 = require("../dto/user-theme.dto");
const save_user_theme_dto_1 = require("../dto/creation/save.user-theme.dto");
const launch_incluscore_service_1 = require("./launch.incluscore.service");
const routes_helper_1 = require("../../provider/routes.helper");
let UserThemeController = class UserThemeController {
    constructor(userThemeService, launchService) {
        this.userThemeService = userThemeService;
        this.launchService = launchService;
    }
    async save(update) {
        update._id = update.id;
        const updatedUserTheme = await this.userThemeService.saveUserAnswerAndUserTheme(update);
        await this.launchService.addUserThemeIfNotExist(updatedUserTheme);
        return new user_theme_dto_1.UserThemeDto(updatedUserTheme);
    }
    async populateUt() {
        this.userThemeService.populateUT().then();
    }
    async findAll() {
        return await this.userThemeService.findAll();
    }
    async findByUserId(userId) {
        return await this.userThemeService.findByUserId(userId);
    }
    async deleteOne(id) {
        return await this.userThemeService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_user_theme_dto_1.SaveUserThemeDto]),
    __metadata("design:returntype", Promise)
], UserThemeController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('populate-ut'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserThemeController.prototype, "populateUt", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserThemeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserThemeController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserThemeController.prototype, "deleteOne", null);
UserThemeController = __decorate([
    (0, common_1.Controller)(routes_helper_1.USER_THEME_SCR_CTRL),
    __metadata("design:paramtypes", [userTheme_service_1.UserThemeService,
        launch_incluscore_service_1.LaunchIncluscoreService])
], UserThemeController);
exports.UserThemeController = UserThemeController;
//# sourceMappingURL=userTheme.controller.js.map