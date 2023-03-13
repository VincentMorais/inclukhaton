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
exports.LaunchIncluscoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const userTheme_service_1 = require("./userTheme.service");
let LaunchIncluscoreService = class LaunchIncluscoreService {
    constructor(launchScrDb, userThemeIncluscoreDb, userAnswerIncluscoreDb) {
        this.launchScrDb = launchScrDb;
        this.userThemeIncluscoreDb = userThemeIncluscoreDb;
        this.userAnswerIncluscoreDb = userAnswerIncluscoreDb;
    }
    async save(update) {
        if (update._id) {
            await this.launchScrDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newLaunch = new this.launchScrDb(update);
        return await newLaunch.save();
    }
    async findOneLight(id, currentUserId) {
        return this.launchScrDb
            .findById(id, { idTeam: 0 })
            .populate({
            path: 'idIncluscore',
            populate: [
                {
                    path: 'themes',
                    populate: {
                        path: 'questions',
                        populate: { path: 'propositions' },
                    },
                },
            ],
        })
            .populate({
            path: 'idCompany',
            select: ['teams', 'imgPath', 'teamArborescence', 'availableRegions', 'displayRegions', 'name'],
            populate: [
                {
                    path: 'teams',
                    select: ['name', 'level1', 'level2', 'level3'],
                    populate: ['level1', 'level2', 'level3'],
                },
                { path: 'teamArborescence' },
                { path: 'availableRegions' },
            ],
        })
            .populate({
            path: 'userThemes',
            select: ['answeredAll', 'score', 'themeId'],
            match: { userId: currentUserId !== 'null' ? new mongoose.Types.ObjectId(currentUserId) : undefined },
            populate: [
                {
                    path: 'answers',
                    populate: [{ path: 'userAnswer', select: 'isAGoodAnswer' }],
                },
                { path: 'userId', select: '_id' },
            ],
        });
    }
    async isInclucardLaunch(id) {
        const launch = await this.launchScrDb.findById(id, { idIncluscore: 1 }).populate({
            path: 'idIncluscore',
            select: 'isInclucard',
        });
        return launch.idIncluscore.isInclucard;
    }
    async findOne(id, selectOnly = {}) {
        return this.launchScrDb
            .findById(id, selectOnly)
            .populate({
            path: 'idIncluscore',
            populate: [
                {
                    path: 'themes',
                    populate: {
                        path: 'questions',
                        populate: { path: 'propositions' },
                    },
                },
            ],
        })
            .populate({
            path: 'idCompany',
            populate: ['users', 'teams'],
        })
            .populate({
            path: 'userThemes',
            populate: [
                {
                    path: 'answers',
                    populate: [{ path: 'userAnswer' }, { path: 'questionId' }],
                },
                { path: 'userId' },
            ],
        });
    }
    async findForStats(id, selectOnly = {}) {
        return this.launchScrDb.findById(id, selectOnly).populate({
            path: 'idIncluscore',
            select: 'displayNewStudentNumber isInclucard name',
            populate: [
                {
                    path: 'themes',
                    select: 'name',
                    populate: {
                        path: 'questions',
                        select: 'title',
                        populate: { path: 'propositions', select: 'title isAGoodAnswer' },
                    },
                },
            ],
        });
    }
    async findAllForAdminCompanyEditionPage(idCompany) {
        return this.launchScrDb
            .find({ idCompany: idCompany }, { idTeam: 1, idIncluscore: 1, userThemes: 1 })
            .populate({
            path: 'idIncluscore',
            select: 'enabled name canBePublic themes',
            populate: { path: 'themes', select: 'name', populate: { path: 'questions', select: '_id title' } },
        })
            .populate({
            path: 'userThemes',
            select: 'score themeId userId',
            populate: { path: 'themeId', select: 'name' },
        });
    }
    async findAllByCompanyId(idCompany) {
        return this.launchScrDb
            .find({ idCompany: idCompany })
            .populate({
            path: 'idIncluscore',
            populate: [{ path: 'themes' }],
        })
            .populate({
            path: 'userThemes',
            populate: [
                {
                    path: 'answers',
                    populate: [{ path: 'userAnswer' }, { path: 'questionId' }],
                },
                { path: 'userId' },
                { path: 'themeId' },
            ],
        });
    }
    async findAll() {
        return this.launchScrDb
            .find()
            .populate({
            path: 'idIncluscore',
            populate: [{ path: 'themes' }],
        })
            .populate({
            path: 'userThemes',
            populate: [
                {
                    path: 'answers',
                    populate: [{ path: 'userAnswer' }, { path: 'questionId' }],
                },
                { path: 'userId' },
                { path: 'themeId' },
            ],
        });
    }
    async addUserThemeIfNotExist(userTheme) {
        const launch = await this.launchScrDb
            .findById(userTheme.launchId, { userThemes: 1 })
            .populate({
            path: 'userThemes',
            select: { userId: 1, themeId: 1, launchId: 1 },
            match: {
                userId: new mongoose.Types.ObjectId(userTheme.userId.id),
                themeId: new mongoose.Types.ObjectId(userTheme.themeId.id),
                launchId: new mongoose.Types.ObjectId(userTheme.launchId.id),
            },
        });
        if ((launch === null || launch === void 0 ? void 0 : launch.userThemes) && (launch === null || launch === void 0 ? void 0 : launch.userThemes.length) < 1) {
            await this.launchScrDb.updateOne({
                _id: userTheme.launchId,
            }, {
                $push: {
                    userThemes: userTheme,
                },
            });
        }
    }
    async deleteOne(id, idCompany) {
        await this.launchScrDb.findByIdAndDelete(id);
        return await this.findAllByCompanyId(idCompany);
    }
    async fixDuplicateThemes() {
        var _a, _b;
        const result = await this.userThemeIncluscoreDb.aggregate([
            {
                $facet: {
                    query: [
                        {
                            $group: {
                                _id: {
                                    userId: '$userId',
                                    idUserTheme: '$themeId',
                                },
                                userThemeId: { $push: '$_id' },
                                items: { $sum: 1 },
                            },
                        },
                        {
                            $match: {
                                items: { $gt: 1 },
                            },
                        },
                        { $unwind: '$userThemeId' },
                    ],
                },
            },
        ]);
        const usersThemesPossiblyWrong = await this.userThemeIncluscoreDb
            .find({ _id: { $in: result[0].query.map((q) => q.userThemeId) } })
            .populate({
            path: 'answers',
            populate: 'userAnswer',
        });
        let fixedUserThemes = [];
        for (const userTheme of usersThemesPossiblyWrong) {
            const firstDuplicate = fixedUserThemes.find((ut) => ut.launchId._id.equals(userTheme === null || userTheme === void 0 ? void 0 : userTheme.launchId._id) &&
                ut.userId._id.equals(userTheme === null || userTheme === void 0 ? void 0 : userTheme.userId._id) &&
                ut.themeId._id.equals(userTheme === null || userTheme === void 0 ? void 0 : userTheme.themeId._id));
            if (!firstDuplicate) {
                fixedUserThemes.push(userTheme);
            }
            else {
                console.debug('fixing duplicate');
                if (((_a = firstDuplicate === null || firstDuplicate === void 0 ? void 0 : firstDuplicate.answers) === null || _a === void 0 ? void 0 : _a.length) > ((_b = userTheme === null || userTheme === void 0 ? void 0 : userTheme.answers) === null || _b === void 0 ? void 0 : _b.length)) {
                    continue;
                }
                fixedUserThemes = fixedUserThemes.map((newU) => newU._id.equals(firstDuplicate === null || firstDuplicate === void 0 ? void 0 : firstDuplicate._id) ? userTheme : newU);
            }
        }
        const userThemesWrongsIds = usersThemesPossiblyWrong
            .filter((u) => !fixedUserThemes.find((f) => f._id.equals(u._id)))
            .map((ut) => ut._id);
        await this.userThemeIncluscoreDb.remove({
            _id: {
                $in: userThemesWrongsIds,
            },
        });
        return userThemesWrongsIds;
    }
    async fixDuplicateAnswers(launch) {
        var _a;
        const result = await this.userThemeIncluscoreDb.aggregate([
            {
                $facet: {
                    query: [
                        {
                            $lookup: {
                                from: collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME,
                                localField: 'answers',
                                foreignField: '_id',
                                as: 'answersAA',
                            },
                        },
                        { $unwind: '$answersAA' },
                        {
                            $group: {
                                _id: {
                                    userId: '$userId',
                                    answersAA: '$answersAA.questionId',
                                },
                                userThemeId: { $first: '$_id' },
                                userId: { $first: '$userId' },
                                test: { $push: '$answersAA' },
                                items: { $sum: 1 },
                            },
                        },
                        {
                            $match: {
                                items: { $gt: 1 },
                            },
                        },
                    ],
                },
            },
        ]);
        const userThemesWithDuplicateQuestion = await this.userThemeIncluscoreDb
            .find({ _id: { $in: result[0].query.map((q) => q.userThemeId) } })
            .populate({
            path: 'answers',
            populate: 'userAnswer',
        });
        for (const userThemeWithDuplicateQuestion of userThemesWithDuplicateQuestion) {
            const fixedAnswers = [];
            userThemeWithDuplicateQuestion.score = 0;
            for (const a of userThemeWithDuplicateQuestion.answers) {
                if (fixedAnswers.find((newA) => newA.questionId._id.equals(a.questionId._id))) {
                    console.debug('remove duplicate answer');
                    await this.userAnswerIncluscoreDb.remove({ _id: a._id });
                    continue;
                }
                fixedAnswers.push(a);
                if ((_a = a === null || a === void 0 ? void 0 : a.userAnswer) === null || _a === void 0 ? void 0 : _a.isAGoodAnswer) {
                    userThemeWithDuplicateQuestion.score += launch.idIncluscore.isInclucard
                        ? userTheme_service_1.UserThemeService.SCORE_FOR_INCLUCARD
                        : userTheme_service_1.UserThemeService.SCORE_FOR_INCLUSCORE;
                }
            }
            await userThemeWithDuplicateQuestion.update({
                $set: { answers: fixedAnswers, score: userThemeWithDuplicateQuestion.score },
            });
        }
    }
    async fixDuplicate() {
        const launches = await this.findAll();
        for (const launch of launches) {
            const userThemesWrongsIds = await this.fixDuplicateThemes();
            await this.fixDuplicateAnswers(launch);
            await this.launchScrDb.updateOne({ _id: launch._id }, {
                $set: {
                    userThemes: launch.userThemes.filter((ut) => !userThemesWrongsIds.find((id) => ut._id.equals(id))),
                },
            });
        }
    }
};
LaunchIncluscoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.LAUNCH_SCR_COLLECTION)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.USER_THEME_SCR_COLLECTION_NAME)),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], LaunchIncluscoreService);
exports.LaunchIncluscoreService = LaunchIncluscoreService;
//# sourceMappingURL=launch.incluscore.service.js.map