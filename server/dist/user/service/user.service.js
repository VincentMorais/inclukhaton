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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const company_service_1 = require("../../company/company.service");
const userTheme_service_1 = require("../../incluscore/progression/userTheme.service");
const login_service_1 = require("../../login/login.service");
const webinar_service_1 = require("../../webinar/webinar.service");
const bcrypt = require('bcrypt');
let UserService = class UserService {
    constructor(userDb, companyDb, teamDb, companyService, userThemeService, loginService, webinarService) {
        this.userDb = userDb;
        this.companyDb = companyDb;
        this.teamDb = teamDb;
        this.companyService = companyService;
        this.userThemeService = userThemeService;
        this.loginService = loginService;
        this.webinarService = webinarService;
        this.populateTeamDelivery = {
            path: 'teamDelivery',
            populate: [{ path: 'delivery', populate: 'notation' }, 'notation'],
        };
    }
    async save(saveUserDto) {
        if (saveUserDto._id) {
            await this.userDb.updateOne({ _id: saveUserDto._id }, saveUserDto);
            return this.findOne(saveUserDto._id);
        }
        const mailInsensitive = new RegExp(saveUserDto.email, 'i');
        const user = await this.userDb.findOne({
            email: mailInsensitive,
        });
        if (user) {
            throw 'User with this email already exist';
        }
        const userCreated = new this.userDb(Object.assign(Object.assign({}, saveUserDto), { pwd: await bcrypt.hash(saveUserDto.pwd, login_service_1.LoginService.SALT) }));
        return await userCreated.save();
    }
    async removeTeamForAllUsers(idTeam) {
        const users = await this.userDb.find();
        for (const u of users.filter((u) => u.teamId === idTeam)) {
            u.teamId = null;
            await u.save();
        }
    }
    async findOne(id, isVeryLightUserQuery = false) {
        const userDb = this.userDb.findById(id).populate({
            path: 'teamId',
            populate: this.populateTeamDelivery,
        });
        if (!isVeryLightUserQuery) {
            userDb
                .populate({
                path: 'companyId',
                populate: [
                    { path: 'users' },
                    {
                        path: 'teams',
                        populate: this.populateTeamDelivery,
                    },
                ],
            })
                .populate({
                path: 'juryOfTeams',
                populate: this.populateTeamDelivery,
            })
                .populate({
                path: 'manageTeams',
                populate: this.populateTeamDelivery,
            });
        }
        return await userDb.exec();
    }
    async setLang(userId, lang) {
        await this.userDb.updateOne({ _id: userId }, { $set: { lang } });
    }
    async findByEmail(email) {
        return await this.userDb
            .findOne({ email: email.toLowerCase() })
            .populate({ path: 'teamId', populate: this.populateTeamDelivery })
            .populate({ path: 'companyId', populate: 'users' })
            .exec();
    }
    async findAll() {
        return await this.userDb.find().exec();
    }
    async getTeamsToManage(user) {
        var _a, _b;
        if (user.isCompanyAdmin) {
            const company = await this.companyService.findOne(user.company.id);
            return company.teams;
        }
        const teamsToDisplay = ((_a = user.juryOfTeams) === null || _a === void 0 ? void 0 : _a.length) > 0 ? [...user.juryOfTeams] : [];
        if (((_b = user.manageTeams) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            const teamManagedOnly = user.manageTeams.filter((t) => !teamsToDisplay.find((team) => team.id === t.id));
            if ((teamManagedOnly === null || teamManagedOnly === void 0 ? void 0 : teamManagedOnly.length) > 0) {
                teamsToDisplay.concat(teamManagedOnly);
            }
        }
        return teamsToDisplay;
    }
    async delete(id) {
        await this.userDb.findByIdAndDelete(id);
    }
    async deleteAndCleanRefs(id) {
        const user = await this.userDb.findById(id);
        if (!user) {
            return null;
        }
        const otherCompanyUsers = await this.companyService.updateUserList(user.companyId, id);
        await this.userThemeService.removeUserAnswers(id);
        await this.loginService.deleteTokenOfUser(id);
        await this.delete(id);
        return otherCompanyUsers;
    }
    async updateNpsNotation(userId, notation) {
        const user = await this.userDb.findById(userId);
        user.npsNotation = notation;
        await user.save();
    }
    async updateNpsComment(userId, comment) {
        const user = await this.userDb.findById(userId);
        user.npsComment = comment;
        await user.save();
    }
    async teamsIdsToTeam() {
        const users = await this.userDb.find({ teamIds: { $exists: true } });
        for (const user of users) {
            if (user.teamIds) {
                user.teamId = user.teamIds[0];
                console.debug(user.teamId);
            }
            user.teamIds = undefined;
            user.save();
        }
    }
    async saveWebinarSeen(idWebinar, idUser) {
        const user = await this.userDb.findById(idUser);
        if (!user.webinars ||
            !user.webinars.find((wId) => {
                return wId.toString('hex') === idWebinar;
            })) {
            const webinar = await this.webinarService.findOne(idWebinar);
            user.webinars.push(webinar);
            await user.save();
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.USER_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.COMPANY_COLLECTION_NAME)),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.TEAM_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        company_service_1.CompanyService,
        userTheme_service_1.UserThemeService,
        login_service_1.LoginService,
        webinar_service_1.WebinarService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map