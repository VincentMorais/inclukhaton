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
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const theme_service_1 = require("./theme.service");
const theme_dto_1 = require("../dto/theme.dto");
const incluscore_service_1 = require("../incluscore.service");
const save_theme_dto_1 = require("../dto/creation/save.theme.dto");
const routes_helper_1 = require("../../provider/routes.helper");
let ThemeController = class ThemeController {
    constructor(themeService, incluscoreService) {
        this.themeService = themeService;
        this.incluscoreService = incluscoreService;
    }
    async save(t) {
        t._id = t.id;
        const isCreation = !t._id;
        delete t.questions;
        delete t.imgPath;
        const theme = await this.themeService.save(t);
        if (isCreation) {
            await this.incluscoreService.addTheme(t.incluscoreId, theme);
        }
        return new theme_dto_1.ThemeDto(theme);
    }
    async findOne(id) {
        const themeDb = await this.themeService.findOne(id);
        return new theme_dto_1.ThemeDto(themeDb);
    }
    async findAll() {
        return this.themeService.find();
    }
    async deleteOne(idTheme, idIncluscore) {
        await this.incluscoreService.removeIdThemeFromIncluscore(idIncluscore, idTheme);
        await this.themeService.deleteOne(idTheme);
        const incluscore = await this.incluscoreService.findOne(idIncluscore);
        return incluscore.themes.map((t) => new theme_dto_1.ThemeDto(t));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_theme_dto_1.SaveThemeDto]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('idTheme')),
    __param(1, (0, common_1.Body)('idIncluscore')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ThemeController.prototype, "deleteOne", null);
ThemeController = __decorate([
    (0, common_1.Controller)(routes_helper_1.THEME_SCR_CTRL),
    __metadata("design:paramtypes", [theme_service_1.ThemeIncluscoreService,
        incluscore_service_1.IncluscoreService])
], ThemeController);
exports.ThemeController = ThemeController;
//# sourceMappingURL=theme.controller.js.map