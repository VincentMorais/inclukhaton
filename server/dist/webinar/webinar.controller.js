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
exports.WebinarController = void 0;
const common_1 = require("@nestjs/common");
const webinar_service_1 = require("./webinar.service");
const webinar_dto_1 = require("./dto/webinar.dto");
const save_webinar_dto_1 = require("./dto/save.webinar.dto");
const routes_helper_1 = require("../provider/routes.helper");
const user_service_1 = require("../user/service/user.service");
const company_service_1 = require("../company/company.service");
let WebinarController = class WebinarController {
    constructor(webinarService, userService, companyService) {
        this.webinarService = webinarService;
        this.userService = userService;
        this.companyService = companyService;
    }
    async seen(seenWebinar) {
        const { idWebinar, idUser } = seenWebinar;
        await this.userService.saveWebinarSeen(idWebinar, idUser);
    }
    async save(saveWebinarDto) {
        saveWebinarDto._id = saveWebinarDto.id;
        delete saveWebinarDto.path;
        delete saveWebinarDto.company;
        saveWebinarDto.company = await this.companyService.findOne(saveWebinarDto.companyId);
        const saveWebinarDb = await this.webinarService.save(saveWebinarDto);
        const webinarPopulatedDb = await this.webinarService.findOne(saveWebinarDb._id);
        return new webinar_dto_1.WebinarDto(webinarPopulatedDb);
    }
    async findOneForFront(webinarId) {
        const webinarDb = await this.webinarService.findOne(webinarId);
        const dto = new webinar_dto_1.WebinarDto(webinarDb);
        if (dto.enabled && dto.isInProgress) {
            return dto;
        }
        return null;
    }
    async findOne(webinarId) {
        const webinarDb = await this.webinarService.findOne(webinarId);
        return new webinar_dto_1.WebinarDto(webinarDb);
    }
    async findAll() {
        const webinarDbs = await this.webinarService.findAll();
        return webinarDbs === null || webinarDbs === void 0 ? void 0 : webinarDbs.map((c) => new webinar_dto_1.WebinarDto(c));
    }
};
__decorate([
    (0, common_1.Post)('seen'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "seen", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_webinar_dto_1.SaveWebinarDto]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('home/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "findOneForFront", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebinarController.prototype, "findAll", null);
WebinarController = __decorate([
    (0, common_1.Controller)(routes_helper_1.WEBINAR_CTRL),
    __metadata("design:paramtypes", [webinar_service_1.WebinarService,
        user_service_1.UserService,
        company_service_1.CompanyService])
], WebinarController);
exports.WebinarController = WebinarController;
//# sourceMappingURL=webinar.controller.js.map