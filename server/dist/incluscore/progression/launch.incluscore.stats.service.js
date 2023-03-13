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
var LScrStatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LScrStatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
const userThemesByLaunchIdWithNbThemeQuery_1 = require("../../queries/userThemesByLaunchIdWithNbThemeQuery");
const userThemesByLaunchIdWithAnsweredAllTrueQuery_1 = require("../../queries/userThemesByLaunchIdWithAnsweredAllTrueQuery");
const userThemesFinishedByThemeIdQuery_1 = require("../../queries/userThemesFinishedByThemeIdQuery");
const usersWithAtLeastOneAnswerByLaunchIdQuery_1 = require("../../queries/usersWithAtLeastOneAnswerByLaunchIdQuery");
const answersCountByThemeIdQuery_1 = require("../../queries/answersCountByThemeIdQuery");
const answersCountByQuestionIdQuery_1 = require("../../queries/answersCountByQuestionIdQuery");
const averageScoreQuery_1 = require("../../queries/averageScoreQuery");
const anormalAnswersOfThisLaunch_1 = require("../../queries/anormalAnswersOfThisLaunch");
const propositionsChosenCount_1 = require("../../queries/propositionsChosenCount");
const userTheme_service_1 = require("./userTheme.service");
let LScrStatService = LScrStatService_1 = class LScrStatService {
    constructor(launchScrDb, userThemeIncluscoreDb, userAnswerIncluscoreDb) {
        this.launchScrDb = launchScrDb;
        this.userThemeIncluscoreDb = userThemeIncluscoreDb;
        this.userAnswerIncluscoreDb = userAnswerIncluscoreDb;
    }
    processAggregateResult(aggregate) {
        return aggregate.map((a) => {
            const keys = Object.keys(a);
            for (const key of keys) {
                if (a[key].length === 1 && a[key][0].items) {
                    const items = a[key][0].items;
                    a[key] = items ? parseInt(a[key][0].items) : 0;
                }
                else {
                    a[key] = 0;
                }
            }
            return a;
        })[0];
    }
    async allAnswersStatsByPropositionId() {
        const idLaunch = LScrStatService_1.currentIdLaunch;
        const idTheme = LScrStatService_1.currentIdTheme;
        const idQuestion = LScrStatService_1.currentIdQuestion;
        const idProposition = LScrStatService_1.currentIdProposition;
        const idTeam = LScrStatService_1.currentIdTeam;
        const $facet = {
            propositionChosenCount: (0, propositionsChosenCount_1.propositionsChosenCount)(idProposition, idTeam),
        };
        const aggregate = await this.userAnswerIncluscoreDb.aggregate([{ $facet }], { hint: 'userAnswer' });
        return {
            idProposition,
            idQuestion,
            idTheme,
            idLaunch,
            userPropositionsStats: this.processAggregateResult(aggregate),
        };
    }
    async allUserThemesStatByQuestionId() {
        const idLaunch = LScrStatService_1.currentIdLaunch;
        const idTheme = LScrStatService_1.currentIdTheme;
        const idQuestion = LScrStatService_1.currentIdQuestion;
        const idTeam = LScrStatService_1.currentIdTeam;
        const $facet = {
            goodAnswersCountByQuestionIdQuery: (0, answersCountByQuestionIdQuery_1.answersCountByQuestionIdQuery)(idQuestion, idTheme, idLaunch, true, idTeam),
            badAnswersCountByQuestionIdQuery: (0, answersCountByQuestionIdQuery_1.answersCountByQuestionIdQuery)(idQuestion, idTheme, idLaunch, false, idTeam),
        };
        const aggregate = await this.userAnswerIncluscoreDb.aggregate([{ $facet }], { hint: 'userAnswer' });
        return {
            idQuestion,
            idTheme,
            idLaunch,
            userQuestionsStats: this.processAggregateResult(aggregate),
        };
    }
    async allUserThemesStatByThemeId() {
        const idLaunch = LScrStatService_1.currentIdLaunch;
        const idTheme = LScrStatService_1.currentIdTheme;
        const currentIdTeam = LScrStatService_1.currentIdTeam;
        const $facet = {
            averageScore: (0, averageScoreQuery_1.averageScoreQuery)(idLaunch, idTheme, currentIdTeam),
            haveFinishedThemeCount: (0, userThemesFinishedByThemeIdQuery_1.userThemesFinishedByThemeIdQuery)(idTheme, currentIdTeam),
            finishedThemeDuplicateCount: (0, userThemesFinishedByThemeIdQuery_1.userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery)(idTheme, currentIdTeam),
        };
        const aggregate = await this.userThemeIncluscoreDb.aggregate([{ $facet }], { hint: 'launchId_1_themeId_1' });
        const $facet2 = {
            goodAnswersCountByThemeIdQuery: (0, answersCountByQuestionIdQuery_1.answersCountByQuestionIdQuery)(null, idTheme, idLaunch, true, currentIdTeam),
            badAnswersCountByThemeIdQuery: (0, answersCountByQuestionIdQuery_1.answersCountByQuestionIdQuery)(null, idTheme, idLaunch, false, currentIdTeam),
        };
        const aggregate2 = await this.userAnswerIncluscoreDb.aggregate([{ $facet: $facet2 }], { hint: 'userAnswer' });
        return {
            idTheme,
            idLaunch,
            userThemesStats: this.processAggregateResult([Object.assign(Object.assign({}, aggregate[0]), aggregate2[0])]),
        };
    }
    async allUserThemesStatByLaunchId() {
        const idLaunch = LScrStatService_1.currentIdLaunch;
        const currentIdTeam = LScrStatService_1.currentIdTeam;
        const nbThemesMax = LScrStatService_1.currentIncluscore.themes.length;
        const $facet = {
            averageScore: (0, averageScoreQuery_1.averageScoreQuery)(idLaunch, null, currentIdTeam),
            usersWithAtLeastOneAnswerCount: (0, usersWithAtLeastOneAnswerByLaunchIdQuery_1.usersWithAtLeastOneAnswerByLaunchIdQuery)(idLaunch, currentIdTeam),
            anormalUsers: (0, userThemesByLaunchIdWithNbThemeQuery_1.userThemesByLaunchIdWithNbThemeQuery)(idLaunch, nbThemesMax, currentIdTeam),
            begunThemesCount: (0, answersCountByThemeIdQuery_1.begunThemesCount)(idLaunch, currentIdTeam),
            finishedThemesCount: (0, answersCountByThemeIdQuery_1.finishedThemesCount)(idLaunch, currentIdTeam),
            totalUsers: (0, userThemesByLaunchIdWithNbThemeQuery_1.userThemesByLaunchIdWithNbThemeQuery)(idLaunch, 0, currentIdTeam),
            usersWhoFinishedAllThemes: (0, userThemesByLaunchIdWithAnsweredAllTrueQuery_1.userThemesByLaunchIdWithAnsweredAllTrueQuery)(idLaunch, nbThemesMax, currentIdTeam),
        };
        const aggregate = await this.userThemeIncluscoreDb.aggregate([{ $facet }], { hint: 'launchId_1_themeId_1' });
        const $facet2 = {
            allAnswersOfThisLaunchWithoutConditionCount: (0, anormalAnswersOfThisLaunch_1.allAnswersOfThisLaunchWithoutCondition)(idLaunch, currentIdTeam),
            anormalAnswersCount: (0, anormalAnswersOfThisLaunch_1.anormalAnswersOfThisLaunch)(idLaunch, currentIdTeam),
        };
        const aggregate2 = await this.userAnswerIncluscoreDb.aggregate([{ $facet: $facet2 }], { hint: 'userAnswer' });
        return this.processAggregateResult([Object.assign(Object.assign({}, aggregate[0]), aggregate2[0])]);
    }
    async getAdminCompanyIncluscoresStats(launch, idTeam) {
        var _a, _b;
        LScrStatService_1.currentIdLaunch = launch._id;
        LScrStatService_1.currentIncluscore = launch.idIncluscore;
        LScrStatService_1.currentIdTeam = idTeam;
        const scoreForOneQuestion = LScrStatService_1.currentIncluscore.isInclucard
            ? userTheme_service_1.UserThemeService.SCORE_FOR_INCLUCARD
            : userTheme_service_1.UserThemeService.SCORE_FOR_INCLUSCORE;
        const nbThemes = LScrStatService_1.currentIncluscore.themes.length;
        const nbQuestions = (_a = LScrStatService_1.currentIncluscore.themes
            .map((t) => t.questions.length)) === null || _a === void 0 ? void 0 : _a.reduce((acc, curr) => acc + curr, 0);
        const nbPropositions = (_b = LScrStatService_1.currentIncluscore.themes
            .map((t) => { var _a; return (_a = t.questions.map((p) => p.propositions.length)) === null || _a === void 0 ? void 0 : _a.reduce((acc, curr) => acc + curr); }, 0)) === null || _b === void 0 ? void 0 : _b.reduce((acc, curr) => acc + curr, 0);
        const oneLaunchAllUserThemesStatsPromise = this.allUserThemesStatByLaunchId();
        const themeAllUserThemesStatsPromise = [];
        const questionAllUserThemesStats = [];
        const propositionsAllUserThemesStats = [];
        for (const theme of LScrStatService_1.currentIncluscore.themes) {
            LScrStatService_1.currentIdTheme = theme._id;
            themeAllUserThemesStatsPromise.push(this.allUserThemesStatByThemeId());
            for (const question of theme.questions) {
                LScrStatService_1.currentIdQuestion = question._id;
                questionAllUserThemesStats.push(this.allUserThemesStatByQuestionId());
                for (const proposition of question.propositions) {
                    LScrStatService_1.currentIdProposition = proposition._id;
                    propositionsAllUserThemesStats.push(this.allAnswersStatsByPropositionId());
                }
            }
        }
        console.time('Promise.all mongo timeout');
        const result = await Promise.all([
            oneLaunchAllUserThemesStatsPromise,
            ...themeAllUserThemesStatsPromise,
            ...questionAllUserThemesStats,
            ...propositionsAllUserThemesStats,
        ]);
        console.timeEnd('Promise.all mongo timeout');
        const oneLaunchAllUserThemesStats = result[0];
        oneLaunchAllUserThemesStats.nbThemes = nbThemes;
        oneLaunchAllUserThemesStats.nbQuestion = nbQuestions;
        oneLaunchAllUserThemesStats.scoreMax = nbQuestions * scoreForOneQuestion;
        const arrayNumbersOneToNumberOfThemes = Array.from({ length: nbThemes }, (_, i) => i + 1);
        const arrayNumbersNbThemesToNbQuestions = Array.from({ length: nbQuestions }, (_, i) => i + 1 + nbThemes);
        const arrayNumbersNbQuestionsToNbPropositions = Array.from({ length: nbPropositions }, (_, i) => i + 1 + nbThemes + nbQuestions);
        const themesStats = arrayNumbersOneToNumberOfThemes.map((index) => {
            const singleThemeStat = result[index];
            const questionsStats = arrayNumbersNbThemesToNbQuestions.map((indexQuestion) => {
                const singleQuestionStat = result[indexQuestion];
                const propositionsStats = arrayNumbersNbQuestionsToNbPropositions.map((indexProposition) => {
                    return result[indexProposition];
                });
                singleQuestionStat.propositionsStats = propositionsStats.filter((ps) => ps.idQuestion === singleQuestionStat.idQuestion);
                return singleQuestionStat;
            });
            singleThemeStat.questionsStats = questionsStats.filter((q) => q.idTheme === singleThemeStat.idTheme);
            singleThemeStat.userThemesStats.scoreMax = singleThemeStat.questionsStats.length * scoreForOneQuestion;
            singleThemeStat.userThemesStats.nbQuestion = singleThemeStat.questionsStats.length;
            return singleThemeStat;
        });
        return {
            themesStats,
            idLaunch: launch._id,
            userThemesStats: oneLaunchAllUserThemesStats,
        };
    }
};
LScrStatService.currentIdLaunch = null;
LScrStatService.currentIdTheme = null;
LScrStatService.currentIdQuestion = null;
LScrStatService.currentIdProposition = null;
LScrStatService.currentIncluscore = null;
LScrStatService.currentIdTeam = null;
LScrStatService = LScrStatService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.LAUNCH_SCR_COLLECTION)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.USER_THEME_SCR_COLLECTION_NAME)),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], LScrStatService);
exports.LScrStatService = LScrStatService;
//# sourceMappingURL=launch.incluscore.stats.service.js.map