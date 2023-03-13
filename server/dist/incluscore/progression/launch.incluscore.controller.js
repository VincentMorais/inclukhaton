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
exports.LaunchScrController = void 0;
const common_1 = require("@nestjs/common");
const launch_incluscore_dto_1 = require("../dto/launch.incluscore.dto");
const launch_incluscore_service_1 = require("./launch.incluscore.service");
const save_launch_incluscore_dto_1 = require("../dto/creation/save.launch.incluscore.dto");
const routes_helper_1 = require("../../provider/routes.helper");
const launch_incluscore_stats_service_1 = require("./launch.incluscore.stats.service");
const userTheme_service_1 = require("./userTheme.service");
const team_service_1 = require("../../team/team.service");
const team_dto_1 = require("../../team/dto/team.dto");
let LaunchScrController = class LaunchScrController {
    constructor(launchScrService, userThemeService, launchIncluscoreStatsService, teamService) {
        this.launchScrService = launchScrService;
        this.userThemeService = userThemeService;
        this.launchIncluscoreStatsService = launchIncluscoreStatsService;
        this.teamService = teamService;
    }
    async save(launch) {
        launch._id = launch.id;
        await this.launchScrService.save(launch);
        const launches = await this.launchScrService.findAllByCompanyId(launch.idCompany);
        return launches.map((l) => new launch_incluscore_dto_1.LaunchIncluscoreDto(l));
    }
    async findLaunchForIncluscoreApp(id, currentUserId) {
        var _a;
        const launch = await this.launchScrService.findOneLight(id, currentUserId);
        if (!launch || !((_a = launch === null || launch === void 0 ? void 0 : launch.idIncluscore) === null || _a === void 0 ? void 0 : _a.enabled)) {
            return null;
        }
        const company = launch.idCompany;
        if (company.teamArborescence) {
            company.teamArborescence = company.teamArborescence.filter((ta) => {
                return company.teams.find((team) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    return ((_b = (_a = team.level1) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString('hex')) === ((_c = ta.id) === null || _c === void 0 ? void 0 : _c.toString('hex')) ||
                        ((_e = (_d = team.level2) === null || _d === void 0 ? void 0 : _d._id) === null || _e === void 0 ? void 0 : _e.toString('hex')) === ((_f = ta.id) === null || _f === void 0 ? void 0 : _f.toString('hex')) ||
                        ((_h = (_g = team.level3) === null || _g === void 0 ? void 0 : _g._id) === null || _h === void 0 ? void 0 : _h.toString('hex')) === ((_j = ta.id) === null || _j === void 0 ? void 0 : _j.toString('hex'));
                });
            });
        }
        return new launch_incluscore_dto_1.LaunchIncluscoreDto(launch);
    }
    async findAllForAdminCompanyEditionPage(idCompany) {
        var _a;
        const launches = await this.launchScrService.findAllForAdminCompanyEditionPage(idCompany);
        const launchesDto = launches.map((l) => new launch_incluscore_dto_1.LaunchIncluscoreDto(l));
        for (const launchDto of launchesDto) {
            if (!((_a = launchDto.userThemes) === null || _a === void 0 ? void 0 : _a.length)) {
                launchDto.userThemes = await this.userThemeService.findByLaunchId(launchDto.id);
            }
        }
        return launchesDto;
    }
    async findStatsForLaunchStatPage(idLaunch) {
        const launch = await this.launchScrService.findForStats(idLaunch, { idIncluscore: 1 });
        const stat = await this.launchIncluscoreStatsService.getAdminCompanyIncluscoresStats(launch);
        return {
            stat: stat,
            launch: new launch_incluscore_dto_1.LaunchIncluscoreDto(launch),
        };
    }
    async findStatsForSingleTeamStatPage(idLaunch, idTeam) {
        const launch = await this.launchScrService.findForStats(idLaunch, { idIncluscore: 1 });
        const teamDb = await this.teamService.findOne(idTeam);
        const stat = await this.launchIncluscoreStatsService.getAdminCompanyIncluscoresStats(launch, idTeam);
        return {
            stat,
            team: new team_dto_1.TeamDto(teamDb),
            launch: new launch_incluscore_dto_1.LaunchIncluscoreDto(launch),
        };
    }
    async findAll() {
        const launches = await this.launchScrService.findAll();
        return launches.map((l) => new launch_incluscore_dto_1.LaunchIncluscoreDto(l));
    }
    async deleteOne(id, idCompany) {
        const companyLaunches = await this.launchScrService.deleteOne(id, idCompany);
        return companyLaunches.map((l) => new launch_incluscore_dto_1.LaunchIncluscoreDto(l));
    }
    async fixDuplicate() {
        await this.launchScrService.fixDuplicate();
        console.debug('finished');
        return 'finished ' + Date.now().toString();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_launch_incluscore_dto_1.SaveLaunchIncluscoreDto]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('current-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "findLaunchForIncluscoreApp", null);
__decorate([
    (0, common_1.Get)('/company/:idCompany'),
    __param(0, (0, common_1.Param)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "findAllForAdminCompanyEditionPage", null);
__decorate([
    (0, common_1.Get)('/single-launch-scr-stats/:idLaunch'),
    __param(0, (0, common_1.Param)('idLaunch')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "findStatsForLaunchStatPage", null);
__decorate([
    (0, common_1.Get)('/single-team-scr-stats/:idLaunch'),
    __param(0, (0, common_1.Param)('idLaunch')),
    __param(1, (0, common_1.Query)('idTeam')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "findStatsForSingleTeamStatPage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('idCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('/fix-duplicate/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaunchScrController.prototype, "fixDuplicate", null);
LaunchScrController = __decorate([
    (0, common_1.Controller)(routes_helper_1.LAUNCH_SCR_CTRL),
    __metadata("design:paramtypes", [launch_incluscore_service_1.LaunchIncluscoreService,
        userTheme_service_1.UserThemeService,
        launch_incluscore_stats_service_1.LScrStatService,
        team_service_1.TeamService])
], LaunchScrController);
exports.LaunchScrController = LaunchScrController;
//# sourceMappingURL=launch.incluscore.controller.js.map