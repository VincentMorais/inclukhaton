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
exports.IncluscoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../provider/collections.provider");
const mongoose_2 = require("mongoose");
const theme_dto_1 = require("./dto/theme.dto");
const question_dto_1 = require("./dto/question.dto");
const proposition_dto_1 = require("./dto/proposition.dto");
const theme_service_1 = require("./theme/theme.service");
let IncluscoreService = class IncluscoreService {
    constructor(incluscoreDb, themesDb, themeService) {
        this.incluscoreDb = incluscoreDb;
        this.themesDb = themesDb;
        this.themeService = themeService;
    }
    async save(update, forceCreation = false) {
        if (update._id && !forceCreation) {
            await this.incluscoreDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newIncluscore = new this.incluscoreDb(update);
        return await newIncluscore.save();
    }
    async addTheme(id, theme) {
        const incluscore = await this.findOne(id);
        incluscore.themes.push(theme);
        await incluscore.save();
    }
    async findOne(id) {
        return this.incluscoreDb.findById(id).populate({
            path: 'themes',
            populate: {
                path: 'questions',
                populate: { path: 'propositions' },
            },
        });
    }
    async findAll(light = false) {
        if (light) {
            return this.incluscoreDb.find({}, { _id: 1, name: 1 });
        }
        return this.incluscoreDb.find().populate({
            path: 'themes',
            populate: {
                path: 'questions',
                populate: { path: 'propositions' },
            },
        });
    }
    async findThemesByIncluscoreId(incluscoreId) {
        const incluscore = await this.incluscoreDb.findById(incluscoreId).populate('themes').exec();
        return incluscore.themes.map((t) => new theme_dto_1.ThemeDto(t));
    }
    async findSpecificQuestions(incluscoreId, themeId) {
        const incluscore = await this.incluscoreDb
            .findById(incluscoreId)
            .populate({
            path: 'themes',
            match: { _id: themeId },
            populate: { path: 'questions', populate: 'propositions' },
            select: 'questions',
        })
            .exec();
        return incluscore.themes[0].questions.map((q) => new question_dto_1.QuestionDto(q));
    }
    async findSpecificPropositions(incluscoreId, themeId, questionId) {
        const incluscore = await this.incluscoreDb
            .findById(incluscoreId)
            .populate({
            path: 'themes',
            match: { _id: themeId },
            populate: {
                path: 'questions',
                match: { _id: questionId },
                populate: 'propositions',
                select: 'propositions',
            },
            select: 'questions',
        })
            .exec();
        return incluscore.themes[0].questions[0].propositions.map((p) => new proposition_dto_1.PropositionDto(p));
    }
    async deleteOne(id) {
        const incluscore = await this.findOne(id);
        for (const t of incluscore.themes) {
            await this.themeService.deleteOne(t._id);
        }
        await this.incluscoreDb.findByIdAndDelete(id);
    }
    async removeIdThemeFromIncluscore(id, idTheme) {
        const incluscore = await this.incluscoreDb.findById(id);
        incluscore.themes = incluscore.themes.filter((t) => !t._id.equals(idTheme));
        await incluscore.save();
        return incluscore.themes;
    }
};
IncluscoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.INCLUSCORE_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.THEMES_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        theme_service_1.ThemeIncluscoreService])
], IncluscoreService);
exports.IncluscoreService = IncluscoreService;
//# sourceMappingURL=incluscore.service.js.map