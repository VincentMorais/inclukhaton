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
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("./team.service");
const team_dto_1 = require("./dto/team.dto");
const save_team_dto_1 = require("./dto/save.team.dto");
const company_service_1 = require("../company/company.service");
const user_service_1 = require("../user/service/user.service");
const launch_incluscore_service_1 = require("../incluscore/progression/launch.incluscore.service");
const routes_helper_1 = require("../provider/routes.helper");
const notation_delivery_dto_1 = require("../inclukathon-program/models/dto/notation-delivery.dto");
const delivery_kth_service_1 = require("../inclukathon-program/delivery/delivery-kth.service");
const save_notation_delivery_dto_1 = require("../inclukathon-program/models/dto/creation/save.notation-delivery.dto");
const teamArborescence_dto_1 = require("../company/dto/teamArborescence.dto");
const saveTeamArborescence_dto_1 = require("../company/dto/saveTeamArborescence.dto");
let TeamController = class TeamController {
    constructor(teamService, companyService, userService, launchService, deliveryService) {
        this.teamService = teamService;
        this.companyService = companyService;
        this.userService = userService;
        this.launchService = launchService;
        this.deliveryService = deliveryService;
    }
    async saveProjectDescription(idTeam, projectDescription) {
        const team = await this.teamService.findOne(idTeam);
        team.projectDescription = projectDescription;
        await team.save();
        return new team_dto_1.TeamDto(team);
    }
    async save(saveTeamDto) {
        saveTeamDto._id = saveTeamDto.id;
        const isCreation = !saveTeamDto._id;
        const updatedTeamDb = await this.teamService.save(saveTeamDto);
        if (isCreation) {
            await this.companyService.addTeam(saveTeamDto.companyId, updatedTeamDb);
        }
        const populatedTeam = await this.teamService.findOne(updatedTeamDb._id);
        return new team_dto_1.TeamDto(populatedTeam);
    }
    async saveArborescence(saveTeamArborescenceDto) {
        saveTeamArborescenceDto._id = saveTeamArborescenceDto.id;
        const isCreation = !saveTeamArborescenceDto._id;
        const updatedTeamArborescenceDb = await this.teamService.saveArborescence(saveTeamArborescenceDto);
        if (isCreation) {
            await this.companyService.addTeamArborescence(saveTeamArborescenceDto.companyId, updatedTeamArborescenceDb);
        }
        return new teamArborescence_dto_1.TeamArborescenceDto(updatedTeamArborescenceDb);
    }
    async saveNotation(saveNotationDto) {
        const team = await this.teamService.findOne(saveNotationDto.idTeam);
        const teamDelivery = team.teamDelivery.find((d) => saveNotationDto.idDelivery === d.delivery._id.toString());
        if (!teamDelivery.notation.find((n) => saveNotationDto.id === n._id.toString())) {
            saveNotationDto.idNotationEvaluated = saveNotationDto.id;
            delete saveNotationDto.id;
        }
        delete saveNotationDto.idTeam;
        delete saveNotationDto.idDelivery;
        saveNotationDto._id = saveNotationDto.id;
        const isCreation = !saveNotationDto._id;
        const updatedNotationDb = await this.deliveryService.saveNotationDelivery(saveNotationDto);
        if (isCreation) {
            await this.teamService.saveNotationForTeamDelivery(updatedNotationDb, teamDelivery);
        }
        return new notation_delivery_dto_1.NotationDeliveryDto(updatedNotationDb);
    }
    async findAllArborescence() {
        const teamDbs = await this.teamService.findAllArborescence();
        return teamDbs.map((t) => new teamArborescence_dto_1.TeamArborescenceDto(t));
    }
    async findAllArborescenceForTeamForm(idCompany) {
        const teamDbs = await this.companyService.findAllArborescenceForTeamForm(idCompany);
        return teamDbs.map((t) => new teamArborescence_dto_1.TeamArborescenceDto(t));
    }
    async findOne(id) {
        const teamDb = await this.teamService.findOne(id);
        return new team_dto_1.TeamDto(teamDb);
    }
    async findOneArborescence(id) {
        const t = await this.teamService.findOneArborescence(id);
        return new teamArborescence_dto_1.TeamArborescenceDto(t);
    }
    async findAll() {
        const teamDbs = await this.teamService.findAll();
        return teamDbs.map((t) => new team_dto_1.TeamDto(t));
    }
    async deleteOne(idTeam, idCompany) {
        const teams = await this.companyService.updateTeamList(idCompany, idTeam);
        await this.userService.removeTeamForAllUsers(idTeam);
        await this.teamService.deleteOne(idTeam);
        return teams.map((t) => new team_dto_1.TeamDto(t));
    }
    async deleteOneArborescence(idTeamArborescence, idCompany) {
        const teams = await this.companyService.updateTeamArborescenceList(idCompany, idTeamArborescence);
        await this.teamService.deleteOneArborescence(idTeamArborescence);
        return teams.map((t) => new teamArborescence_dto_1.TeamArborescenceDto(t));
    }
};
__decorate([
    (0, common_1.Post)('project-description'),
    __param(0, (0, common_1.Body)('idTeam')),
    __param(1, (0, common_1.Body)('projectDescription')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "saveProjectDescription", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_team_dto_1.SaveTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('new-arborescence'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [saveTeamArborescence_dto_1.SaveTeamArborescenceDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "saveArborescence", null);
__decorate([
    (0, common_1.Post)('save-notation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_notation_delivery_dto_1.SaveNotationDeliveryDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "saveNotation", null);
__decorate([
    (0, common_1.Get)('arborescence'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAllArborescence", null);
__decorate([
    (0, common_1.Get)('arborescence-available/:idCompany'),
    __param(0, (0, common_1.Param)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAllArborescenceForTeamForm", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('arborescence/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findOneArborescence", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('idTeam')),
    __param(1, (0, common_1.Body)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('arborescence'),
    __param(0, (0, common_1.Body)('idTeamArborescence')),
    __param(1, (0, common_1.Body)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "deleteOneArborescence", null);
TeamController = __decorate([
    (0, common_1.Controller)(routes_helper_1.TEAM_CTRL),
    __metadata("design:paramtypes", [team_service_1.TeamService,
        company_service_1.CompanyService,
        user_service_1.UserService,
        launch_incluscore_service_1.LaunchIncluscoreService,
        delivery_kth_service_1.DeliveryKthService])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map