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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collections_provider_1 = require("../provider/collections.provider");
let TeamService = class TeamService {
    constructor(teamDb, teamArborescenceDb) {
        this.teamDb = teamDb;
        this.teamArborescenceDb = teamArborescenceDb;
    }
    async save(saveTeamDto) {
        [1, 2, 3].map((n) => {
            var _a;
            if (saveTeamDto[`level${n}`] === '-1') {
                saveTeamDto[`level${n}`] = null;
            }
            if ((_a = saveTeamDto[`level${n}`]) === null || _a === void 0 ? void 0 : _a.id) {
                saveTeamDto[`level${n}`] = saveTeamDto[`level${n}`].id;
            }
        });
        if (saveTeamDto._id) {
            await this.teamDb.updateOne({ _id: saveTeamDto._id }, saveTeamDto);
            return this.findOne(saveTeamDto._id);
        }
        const teamUpdated = new this.teamDb(saveTeamDto);
        return await teamUpdated.save();
    }
    async saveArborescence(saveTeamArborescenceDto) {
        if (saveTeamArborescenceDto._id) {
            await this.teamArborescenceDb.updateOne({ _id: saveTeamArborescenceDto._id }, saveTeamArborescenceDto);
            return this.teamArborescenceDb.findById(saveTeamArborescenceDto._id);
        }
        const updated = new this.teamArborescenceDb(saveTeamArborescenceDto);
        return await updated.save();
    }
    async saveNotationForTeamDelivery(saveNotationDto, teamDeliveryDb) {
        teamDeliveryDb.notation.push(saveNotationDto);
        return await teamDeliveryDb.save();
    }
    async populateTeamsFields(teams) {
        return await this.teamDb.populate(teams, [
            { path: 'level1' },
            { path: 'level2' },
            { path: 'level3' },
            {
                path: 'teamDelivery',
                populate: { path: 'notation' },
            },
        ]);
    }
    async findOne(id) {
        const teamDb = await this.teamDb.findById(id);
        const populatedTeams = await this.populateTeamsFields([teamDb]);
        return populatedTeams[0];
    }
    async findOneArborescence(id) {
        return this.teamArborescenceDb.findById(id);
    }
    async findAll() {
        const teamDbs = await this.teamDb.find();
        return await this.populateTeamsFields(teamDbs);
    }
    async findAllArborescence() {
        return this.teamArborescenceDb.find();
    }
    async findByIds(ids) {
        const teamDbs = await this.teamDb.find({ _id: { $in: ids } });
        return await this.populateTeamsFields(teamDbs);
    }
    async deleteOne(id) {
        await this.teamDb.findByIdAndDelete(id);
    }
    async deleteOneArborescence(id) {
        await this.teamArborescenceDb.findByIdAndDelete(id);
    }
};
TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.TEAM_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map