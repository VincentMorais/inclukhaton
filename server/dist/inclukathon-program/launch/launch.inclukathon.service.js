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
exports.LaunchInclukathonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
const DateTimeHelper_1 = require("../../helper/DateTimeHelper");
const luxon_1 = require("luxon");
const launch_inclukathon_dto_1 = require("../models/dto/launch.inclukathon.dto");
let LaunchInclukathonService = class LaunchInclukathonService {
    constructor(launchKthDb) {
        this.launchKthDb = launchKthDb;
    }
    async retrieveLastInProgressInclukathon(user) {
        var _a, _b;
        const now = luxon_1.DateTime.now();
        const launches = await this.findAllByCompanyId(user.company.id, false);
        const launchesDto = launches === null || launches === void 0 ? void 0 : launches.map((l) => new launch_inclukathon_dto_1.LaunchInclukathonDto(l));
        if ((launchesDto === null || launchesDto === void 0 ? void 0 : launchesDto.length) > 0) {
            const inclukathonsInProgress = launchesDto.filter((launch) => { var _a, _b; return DateTimeHelper_1.DateTimeHelper.isIn(now, (_a = launch.idInclukathon) === null || _a === void 0 ? void 0 : _a.startDate, (_b = launch.idInclukathon) === null || _b === void 0 ? void 0 : _b.endDate); });
            inclukathonsInProgress.sort((launchA, launchB) => {
                return DateTimeHelper_1.DateTimeHelper.isBefore(launchA.idInclukathon.startDate, launchB.idInclukathon.startDate)
                    ? 1
                    : -1;
            });
            return ((_a = inclukathonsInProgress[0]) === null || _a === void 0 ? void 0 : _a.idInclukathon) ? (_b = inclukathonsInProgress[0]) === null || _b === void 0 ? void 0 : _b.idInclukathon : null;
        }
        return null;
    }
    async save(update) {
        if (update._id) {
            await this.launchKthDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newLaunch = new this.launchKthDb(update);
        return await newLaunch.save();
    }
    async findOne(id) {
        return this.launchKthDb
            .findById(id)
            .populate('idTeam')
            .populate({
            path: 'idInclukathon',
            populate: [
                'bai',
                { path: 'deliveries', populate: 'notation' },
                {
                    path: 'kthScrAssociation',
                    populate: ['incluscore', 'launchIncluscore'],
                },
            ],
        })
            .populate({
            path: 'idCompany',
            populate: ['users', 'teams'],
        });
    }
    async findAllByCompanyId(idCompany, light = true) {
        if (light) {
            return this.launchKthDb.find({ idCompany: idCompany });
        }
        return this.launchKthDb
            .find({ idCompany: idCompany })
            .populate('idTeam')
            .populate({
            path: 'idInclukathon',
            populate: [
                'bai',
                { path: 'deliveries', populate: 'notation' },
                {
                    path: 'kthScrAssociation',
                    populate: ['incluscore', { path: 'launchIncluscore', populate: 'userThemes' }],
                },
            ],
        })
            .populate({
            path: 'idCompany',
            populate: ['users', 'teams'],
        });
    }
    async findAll() {
        return this.launchKthDb.find();
    }
    async removeTeamLaunches(idTeam) {
        await this.launchKthDb.deleteMany({ idTeam });
    }
    async deleteOne(id, idCompany) {
        await this.launchKthDb.findByIdAndDelete(id);
        return await this.findAllByCompanyId(idCompany);
    }
};
LaunchInclukathonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.LAUNCH_KTH_COLLECTION)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LaunchInclukathonService);
exports.LaunchInclukathonService = LaunchInclukathonService;
//# sourceMappingURL=launch.inclukathon.service.js.map