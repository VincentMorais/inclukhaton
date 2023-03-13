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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collections_provider_1 = require("../provider/collections.provider");
let CompanyService = class CompanyService {
    constructor(companyDb, userDb, teamDb, availableRegionDb) {
        this.companyDb = companyDb;
        this.userDb = userDb;
        this.teamDb = teamDb;
        this.availableRegionDb = availableRegionDb;
    }
    async save(saveCompanyDto) {
        if (saveCompanyDto._id) {
            await this.companyDb.updateOne({ _id: saveCompanyDto._id }, saveCompanyDto);
            return this.findOne(saveCompanyDto._id);
        }
        const companyUpdated = new this.companyDb(saveCompanyDto);
        return await companyUpdated.save();
    }
    async addUser(id, user) {
        const companyDb = await this.findOne(id);
        companyDb.users.push(user);
        return await companyDb.save();
    }
    async addTeam(id, team) {
        const companyDb = await this.findOne(id);
        companyDb.teams.push(team);
        return await companyDb.save();
    }
    async addTeamArborescence(id, teamArborescence) {
        const companyDb = await this.findOne(id);
        companyDb.teamArborescence.push(teamArborescence);
        return await companyDb.save();
    }
    async findAllArborescenceForTeamForm(idCompany) {
        const company = await this.companyDb.findById(idCompany).populate('teamArborescence');
        return company.teamArborescence;
    }
    async addAvailableRegion(id, availableRegion) {
        const companyDb = await this.findOne(id);
        companyDb.availableRegions.push(availableRegion);
        return await companyDb.save();
    }
    async saveAvailableRegion(newRegion) {
        if (newRegion._id) {
            await this.availableRegionDb.updateOne({ _id: newRegion._id }, newRegion);
            return this.availableRegionDb.findById(newRegion._id);
        }
        const updated = new this.availableRegionDb(newRegion);
        return await updated.save();
    }
    async deleteOneAvailableRegion(id) {
        await this.availableRegionDb.findByIdAndDelete(id);
    }
    async updateAvailableRegionList(id, idAvailableRegion) {
        const company = await this.companyDb.findById(id);
        company.availableRegions = company.availableRegions.filter((t) => !t._id.equals(idAvailableRegion));
        await company.save();
        const companyDb = await this.findOne(id);
        return companyDb.availableRegions;
    }
    async findOne(companyId) {
        return this.companyDb
            .findById(companyId)
            .populate({
            path: 'users',
            populate: [
                { path: 'webinars' },
                { path: 'juryOfTeams' },
                { path: 'manageTeams' },
                { path: 'teamId', populate: [{ path: 'level1' }, { path: 'level2' }, { path: 'level3' }] },
            ],
        })
            .populate({
            path: 'teams',
            populate: [{ path: 'level1' }, { path: 'level2' }, { path: 'level3' }],
        })
            .populate('teamArborescence')
            .populate('availableRegions')
            .exec();
    }
    async findAll(light) {
        if (light) {
            return this.companyDb.find();
        }
        return this.companyDb
            .find()
            .populate({ path: 'users', populate: 'teamId' })
            .populate('teams')
            .populate('teamArborescence')
            .populate('availableRegions')
            .exec();
    }
    async updateUserList(companyId, userId) {
        const company = await this.companyDb.findById(companyId);
        company.users = company.users.filter((u) => !u._id.equals(userId));
        await company.save();
        return company.users;
    }
    async updateTeamList(id, idTeam) {
        const company = await this.companyDb.findById(id);
        company.teams = company.teams.filter((t) => !t._id.equals(idTeam));
        await company.save();
        const companyDb = await this.findOne(id);
        return companyDb.teams;
    }
    async updateTeamArborescenceList(id, idTeamArborescence) {
        const company = await this.companyDb.findById(id);
        company.teamArborescence = company.teamArborescence.filter((t) => !t._id.equals(idTeamArborescence));
        await company.save();
        const companyDb = await this.findOne(id);
        return companyDb.teamArborescence;
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.COMPANY_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.USER_COLLECTION_NAME)),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.TEAM_COLLECTION_NAME)),
    __param(3, (0, mongoose_1.InjectModel)(collections_provider_1.AVAILABLE_REGION_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map