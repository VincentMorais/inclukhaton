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
exports.LaunchKthController = void 0;
const common_1 = require("@nestjs/common");
const launch_inclukathon_service_1 = require("./launch.inclukathon.service");
const save_launch_inclukathon_dto_1 = require("../models/dto/creation/save.launch.inclukathon.dto");
const launch_inclukathon_dto_1 = require("../models/dto/launch.inclukathon.dto");
const routes_helper_1 = require("../../provider/routes.helper");
const launch_incluscore_service_1 = require("../../incluscore/progression/launch.incluscore.service");
const inclukathon_program_service_1 = require("../inclukathon-program.service");
const kth_scr_association_service_1 = require("../kthScrAssociation/kth-scr-association.service");
let LaunchKthController = class LaunchKthController {
    constructor(launchKthService, launchIncluscoreService, inclukathonProgramService, kthScrAssociationService) {
        this.launchKthService = launchKthService;
        this.launchIncluscoreService = launchIncluscoreService;
        this.inclukathonProgramService = inclukathonProgramService;
        this.kthScrAssociationService = kthScrAssociationService;
    }
    async save(launch) {
        var _a;
        launch._id = launch.id;
        await this.launchKthService.save(launch);
        const kth = await this.inclukathonProgramService.findOne(launch.idInclukathon);
        if (kth.kthScrAssociation) {
            for (const association of kth.kthScrAssociation) {
                const saveAssociationDto = {
                    _id: association._id,
                };
                saveAssociationDto.launchIncluscore = await this.launchIncluscoreService.save(Object.assign(Object.assign({}, launch), { idIncluscore: (_a = association === null || association === void 0 ? void 0 : association.incluscore) === null || _a === void 0 ? void 0 : _a._id }));
                await this.kthScrAssociationService.save(saveAssociationDto);
            }
        }
        const launches = await this.launchKthService.findAllByCompanyId(launch.idCompany);
        return launches.length > 0 ? launches.map((l) => new launch_inclukathon_dto_1.LaunchInclukathonDto(l)) : [];
    }
    async findOne(id) {
        const launch = await this.launchKthService.findOne(id);
        return launch ? new launch_inclukathon_dto_1.LaunchInclukathonDto(launch) : null;
    }
    async findAllByCompanyId(idCompany) {
        const launches = await this.launchKthService.findAllByCompanyId(idCompany);
        return launches.length > 0 ? launches.map((l) => new launch_inclukathon_dto_1.LaunchInclukathonDto(l)) : [];
    }
    async findAll() {
        const launches = await this.launchKthService.findAll();
        return launches.map((l) => new launch_inclukathon_dto_1.LaunchInclukathonDto(l));
    }
    async deleteOne(id, idCompany) {
        const companyLaunches = await this.launchKthService.deleteOne(id, idCompany);
        return companyLaunches.map((l) => new launch_inclukathon_dto_1.LaunchInclukathonDto(l));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_launch_inclukathon_dto_1.SaveLaunchInclukathonDto]),
    __metadata("design:returntype", Promise)
], LaunchKthController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaunchKthController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/company/:idCompany'),
    __param(0, (0, common_1.Param)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaunchKthController.prototype, "findAllByCompanyId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaunchKthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LaunchKthController.prototype, "deleteOne", null);
LaunchKthController = __decorate([
    (0, common_1.Controller)(routes_helper_1.LAUNCH_KTH_CTRL),
    __metadata("design:paramtypes", [launch_inclukathon_service_1.LaunchInclukathonService,
        launch_incluscore_service_1.LaunchIncluscoreService,
        inclukathon_program_service_1.InclukathonProgramService,
        kth_scr_association_service_1.KthScrAssociationService])
], LaunchKthController);
exports.LaunchKthController = LaunchKthController;
//# sourceMappingURL=launch.inclukathon.controller.js.map