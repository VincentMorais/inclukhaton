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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_dto_1 = require("./dto/company.dto");
const save_company_dto_1 = require("./dto/save.company.dto");
const routes_helper_1 = require("../provider/routes.helper");
const availableRegion_dto_1 = require("./dto/availableRegion.dto");
const saveAvailableRegion_dto_1 = require("./dto/saveAvailableRegion.dto");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async saveArborescence(saveAvailableRegionDto) {
        saveAvailableRegionDto._id = saveAvailableRegionDto.id;
        const isCreation = !saveAvailableRegionDto._id;
        const updatedRegionDb = await this.companyService.saveAvailableRegion(saveAvailableRegionDto);
        if (isCreation) {
            await this.companyService.addAvailableRegion(saveAvailableRegionDto.companyId, updatedRegionDb);
        }
        return new availableRegion_dto_1.AvailableRegionDto(updatedRegionDb);
    }
    async save(saveCompanyDto) {
        saveCompanyDto._id = saveCompanyDto.id;
        delete saveCompanyDto.teams;
        delete saveCompanyDto.teamArborescence;
        delete saveCompanyDto.availableRegions;
        delete saveCompanyDto.users;
        delete saveCompanyDto.imgPath;
        const saveCompanyDb = await this.companyService.save(saveCompanyDto);
        const companyPopulatedDb = await this.companyService.findOne(saveCompanyDb._id);
        return new company_dto_1.CompanyDto(companyPopulatedDb);
    }
    async findAllLight() {
        const companyDbs = await this.companyService.findAll(true);
        return companyDbs === null || companyDbs === void 0 ? void 0 : companyDbs.map((c) => new company_dto_1.CompanyDto(c));
    }
    async findOne(companyId) {
        const companyDb = await this.companyService.findOne(companyId);
        return new company_dto_1.CompanyDto(companyDb);
    }
    async findAll() {
        const companyDbs = await this.companyService.findAll();
        return companyDbs === null || companyDbs === void 0 ? void 0 : companyDbs.map((c) => new company_dto_1.CompanyDto(c));
    }
    async deleteOneAvailableRegion(idAvailableRegion, idCompany) {
        const teams = await this.companyService.updateAvailableRegionList(idCompany, idAvailableRegion);
        await this.companyService.deleteOneAvailableRegion(idAvailableRegion);
        return teams.map((t) => new availableRegion_dto_1.AvailableRegionDto(t));
    }
};
__decorate([
    (0, common_1.Post)('available-region'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [saveAvailableRegion_dto_1.SaveAvailableRegionDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "saveArborescence", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_company_dto_1.SaveCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('light'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAllLight", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('available-region'),
    __param(0, (0, common_1.Body)('idAvailableRegion')),
    __param(1, (0, common_1.Body)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteOneAvailableRegion", null);
CompanyController = __decorate([
    (0, common_1.Controller)(routes_helper_1.COMPANY_CTRL),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map