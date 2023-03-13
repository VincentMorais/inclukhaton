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
exports.ThemeIncluscoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
const theme_dto_1 = require("../dto/theme.dto");
const question_service_1 = require("./question.service");
let ThemeIncluscoreService = class ThemeIncluscoreService {
    constructor(themesDb, questionService) {
        this.themesDb = themesDb;
        this.questionService = questionService;
    }
    async save(update, forceCreation = false) {
        if (update._id && !forceCreation) {
            await this.themesDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newObj = new this.themesDb(update);
        return await newObj.save();
    }
    async addQuestion(idTheme, question) {
        const theme = await this.findOne(idTheme);
        theme.questions.push(question);
        await theme.save();
    }
    async getNbQuestions(idTheme) {
        return (await this.findOne(idTheme, { questions: 1 })).questions.length;
    }
    async findOne(id, selectOnly = {}) {
        return await this.themesDb
            .findById(id, selectOnly)
            .populate({
            path: 'questions',
            populate: {
                path: 'propositions',
            },
        })
            .exec();
    }
    async find() {
        const themeDbs = await this.themesDb
            .find()
            .populate({
            path: 'questions',
            populate: {
                path: 'propositions',
            },
        })
            .exec();
        return themeDbs.map((t) => new theme_dto_1.ThemeDto(t));
    }
    async removeIdQuestionFromTheme(id, idQuestion) {
        const themeDb = await this.themesDb.findById(id);
        themeDb.questions = themeDb.questions.filter((q) => !q._id.equals(idQuestion));
        await themeDb.save();
        return themeDb.questions;
    }
    async deleteOne(id) {
        const themeDb = await this.findOne(id);
        for (const q of themeDb.questions) {
            await this.questionService.deleteOne(q._id);
        }
        await this.themesDb.findByIdAndDelete(id);
    }
};
ThemeIncluscoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.THEMES_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        question_service_1.QuestionIncluscoreService])
], ThemeIncluscoreService);
exports.ThemeIncluscoreService = ThemeIncluscoreService;
//# sourceMappingURL=theme.service.js.map