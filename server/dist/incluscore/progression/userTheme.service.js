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
var UserThemeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserThemeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const user_theme_dto_1 = require("../dto/user-theme.dto");
const incluscore_service_1 = require("../incluscore.service");
const theme_service_1 = require("../theme/theme.service");
const proposition_service_1 = require("../theme/proposition.service");
const launch_incluscore_service_1 = require("./launch.incluscore.service");
const mongoose = require("mongoose");
let UserThemeService = UserThemeService_1 = class UserThemeService {
    constructor(userThemeDb, userAnswerDb, themeIncluscoreService, propositionService, incluscoreService, launchService) {
        this.userThemeDb = userThemeDb;
        this.userAnswerDb = userAnswerDb;
        this.themeIncluscoreService = themeIncluscoreService;
        this.propositionService = propositionService;
        this.incluscoreService = incluscoreService;
        this.launchService = launchService;
    }
    async saveUserTheme(update, answer) {
        let userThemeToSave = await this.userThemeDb.findOne({
            userId: new mongoose.Types.ObjectId(update.userId),
            themeId: new mongoose.Types.ObjectId(update.themeId),
            launchId: new mongoose.Types.ObjectId(update.launchId),
        });
        if (userThemeToSave) {
            userThemeToSave.answers.push(answer._id);
        }
        else {
            const userId = update.userId;
            const themeId = update.themeId;
            const launchId = update.launchId;
            if (!userId || !themeId || !launchId) {
                console.debug('K.O saving user theme');
                throw 'No existing user theme for this id and props are missing for creating a new one';
            }
            console.debug('new user theme');
            userThemeToSave = new this.userThemeDb({
                userId,
                themeId,
                launchId,
                teamId: update.teamId,
                answers: [answer._id],
                score: 0,
            });
        }
        userThemeToSave = await this.retrieveUserThemeData(userThemeToSave, update, answer.userAnswer);
        const savedUserTheme = await userThemeToSave.save();
        return this.findOne(savedUserTheme._id);
    }
    async retrieveUserThemeData(userThemeToSave, update, propositionChosenId) {
        var _a;
        const nbThemeQuestions = await this.themeIncluscoreService.getNbQuestions(update.themeId);
        userThemeToSave.answeredAll = nbThemeQuestions <= ((_a = userThemeToSave.answers) === null || _a === void 0 ? void 0 : _a.length);
        const p = await this.propositionService.findOne(propositionChosenId);
        const isInclucardLaunch = await this.launchService.isInclucardLaunch(update.launchId);
        if (p.isAGoodAnswer) {
            userThemeToSave.score = isInclucardLaunch
                ? userThemeToSave.score + UserThemeService_1.SCORE_FOR_INCLUCARD
                : userThemeToSave.score + UserThemeService_1.SCORE_FOR_INCLUSCORE;
        }
        return userThemeToSave;
    }
    async saveUserAnswerAndUserTheme(update) {
        var _a;
        const { userId, themeId, launchId, answer } = update;
        const utWithOtherId = await this.userThemeDb
            .findOne({
            userId: new mongoose.Types.ObjectId(userId),
            themeId: new mongoose.Types.ObjectId(themeId),
            launchId: new mongoose.Types.ObjectId(launchId),
        }, { _id: 1, answers: 1 })
            .populate({
            path: 'answers',
            match: {
                questionId: new mongoose.Types.ObjectId(answer.questionId),
            },
        });
        if (((_a = utWithOtherId === null || utWithOtherId === void 0 ? void 0 : utWithOtherId.answers) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            console.debug('K.O saving answer, return user theme with already existing one answer for this question');
            return this.findOne(utWithOtherId._id);
        }
        console.debug('New user answer');
        const createdUserAnswer = new this.userAnswerDb(answer);
        const p = await this.propositionService.findOne(answer.userAnswer);
        createdUserAnswer.isAGoodAnswer = p.isAGoodAnswer;
        const savedUserAnswer = await createdUserAnswer.save();
        return await this.saveUserTheme(update, savedUserAnswer);
    }
    async findOne(id) {
        return this.userThemeDb.findById(id).populate({
            path: 'answers',
            populate: [{ path: 'userAnswer' }],
        });
    }
    async findAll() {
        const userThemeDbs = await this.userThemeDb
            .find()
            .populate({
            path: 'themeId',
            populate: {
                path: 'questions',
                populate: { path: 'propositions' },
            },
        })
            .populate('userId')
            .populate({
            path: 'answers',
            populate: [{ path: 'questionId', populate: 'propositions' }, { path: 'userAnswer' }],
        });
        return userThemeDbs.map((u) => new user_theme_dto_1.UserThemeDto(u));
    }
    async findByLaunchId(launchId) {
        const userThemeDbs = await this.userThemeDb
            .find({ launchId })
            .populate('userId')
            .populate({
            path: 'themeId',
            populate: {
                path: 'questions',
                populate: { path: 'propositions' },
            },
        })
            .populate({
            path: 'answers',
            populate: [{ path: 'questionId', populate: 'propositions' }, { path: 'userAnswer' }],
        });
        return userThemeDbs.map((u) => new user_theme_dto_1.UserThemeDto(u));
    }
    async findByUserId(userId) {
        const userThemeDbs = await this.userThemeDb
            .find({ userId })
            .populate('userId')
            .populate({
            path: 'themeId',
            populate: {
                path: 'questions',
                populate: { path: 'propositions' },
            },
        })
            .populate({
            path: 'answers',
            populate: [{ path: 'questionId', populate: 'propositions' }, { path: 'userAnswer' }],
        });
        return userThemeDbs.map((u) => new user_theme_dto_1.UserThemeDto(u));
    }
    async deleteOne(id) {
        const userTheme = await this.userThemeDb
            .findById(id)
            .populate({ path: 'answers', select: '_id' });
        const userId = userTheme.userId;
        const idAnswersToRemove = userTheme.answers.map((a) => a._id);
        await this.userAnswerDb.deleteMany({ _id: { $in: idAnswersToRemove } });
        await this.userThemeDb.findByIdAndDelete(id);
        return this.findByUserId(userId);
    }
    async removeUserAnswers(idUser) {
        const userThemes = await this.userThemeDb
            .find({ userId: idUser })
            .populate({ path: 'answers', select: '_id' });
        for (const userTheme of userThemes) {
            const idAnswersToRemove = userTheme.answers.map((a) => a._id);
            await this.userAnswerDb.deleteMany({
                _id: { $in: idAnswersToRemove },
            });
            await this.deleteOne(userTheme._id);
        }
    }
    async populateUT() {
        var _a;
        const uts = await this.userThemeDb
            .find()
            .populate('userId')
            .populate({ path: 'answers', populate: 'userAnswer' });
        for (const ut of uts) {
            ut.teamId = ut.userId.teamId;
            for (const utA of ut.answers) {
                const answer = utA;
                answer.teamId = ut.userId.teamId;
                answer.launchId = ut.launchId;
                answer.themeId = ut.themeId;
                answer.userId = ut.userId.id;
                answer.isAGoodAnswer = (_a = answer.userAnswer) === null || _a === void 0 ? void 0 : _a.isAGoodAnswer;
                await answer.save();
            }
            await ut.save();
        }
    }
};
UserThemeService.SCORE_FOR_INCLUCARD = 50;
UserThemeService.SCORE_FOR_INCLUSCORE = 100;
UserThemeService = UserThemeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.USER_THEME_SCR_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        theme_service_1.ThemeIncluscoreService,
        proposition_service_1.PropositionIncluscoreService,
        incluscore_service_1.IncluscoreService,
        launch_incluscore_service_1.LaunchIncluscoreService])
], UserThemeService);
exports.UserThemeService = UserThemeService;
//# sourceMappingURL=userTheme.service.js.map