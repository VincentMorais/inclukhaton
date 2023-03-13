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
exports.IncluscoreController = void 0;
const common_1 = require("@nestjs/common");
const incluscore_service_1 = require("./incluscore.service");
const incluscore_dto_1 = require("./dto/incluscore.dto");
const save_incluscore_dto_1 = require("./dto/creation/save.incluscore.dto");
const routes_helper_1 = require("../provider/routes.helper");
const proposition_service_1 = require("./theme/proposition.service");
const question_service_1 = require("./theme/question.service");
const theme_service_1 = require("./theme/theme.service");
const mongoose = require("mongoose");
let IncluscoreController = class IncluscoreController {
    constructor(incluscoreService, themeService, questionService, propositionService) {
        this.incluscoreService = incluscoreService;
        this.themeService = themeService;
        this.questionService = questionService;
        this.propositionService = propositionService;
    }
    async copyThisIncluscore(idIncluscore) {
        const incluscore = await this.incluscoreService.findOne(idIncluscore);
        incluscore._id = new mongoose.Types.ObjectId();
        incluscore.isNew = true;
        incluscore.name = '(copy) ' + incluscore.name;
        const newIncluscore = await this.incluscoreService.save(incluscore, true);
        const incluscoresThemes = [...incluscore.themes];
        newIncluscore.themes = [];
        for (const t of incluscoresThemes) {
            t._id = new mongoose.Types.ObjectId();
            t.isNew = true;
            const questionsToLoop = [...t.questions];
            t.questions = [];
            const savedNewTheme = await this.themeService.save(t, true);
            for (const q of questionsToLoop) {
                q._id = new mongoose.Types.ObjectId();
                q.isNew = true;
                const propositionsToLoop = [...q.propositions];
                q.propositions = [];
                const savedNewQuestion = await this.questionService.save(q, true);
                for (const p of propositionsToLoop) {
                    p._id = new mongoose.Types.ObjectId();
                    p.isNew = true;
                    const savedProposition = await this.propositionService.save(p, true);
                    savedNewQuestion.propositions.push(savedProposition._id);
                }
                await savedNewQuestion.save();
                savedNewTheme.questions.push(q._id);
            }
            await savedNewTheme.save();
            newIncluscore.themes.push(savedNewTheme._id);
        }
        return new incluscore_dto_1.IncluscoreDto(await this.incluscoreService.save(newIncluscore));
    }
    async save(incluscore) {
        incluscore._id = incluscore.id;
        delete incluscore.themes;
        const incluscoreDb = await this.incluscoreService.save(incluscore);
        return new incluscore_dto_1.IncluscoreDto(incluscoreDb);
    }
    async findAllForCompanyAssociation() {
        const incluscores = await this.incluscoreService.findAll(true);
        return incluscores.map((i) => new incluscore_dto_1.IncluscoreDto(i));
    }
    async findOne(idIncluscore) {
        const incluscore = await this.incluscoreService.findOne(idIncluscore);
        return new incluscore_dto_1.IncluscoreDto(incluscore);
    }
    async findAll() {
        const incluscores = await this.incluscoreService.findAll();
        return incluscores.map((i) => new incluscore_dto_1.IncluscoreDto(i));
    }
    async findSpecificThemes(idIncluscore) {
        return this.incluscoreService.findThemesByIncluscoreId(idIncluscore);
    }
    async findSpecificQuestions(idIncluscore, idTheme) {
        return this.incluscoreService.findSpecificQuestions(idIncluscore, idTheme);
    }
    async findSpecificPropositions(idIncluscore, idTheme, idQuestion) {
        return this.incluscoreService.findSpecificPropositions(idIncluscore, idTheme, idQuestion);
    }
    async deleteOne(idIncluscore) {
        await this.incluscoreService.deleteOne(idIncluscore);
        const incluscores = await this.incluscoreService.findAll();
        return incluscores.map((incluscoreDb) => new incluscore_dto_1.IncluscoreDto(incluscoreDb));
    }
};
__decorate([
    (0, common_1.Get)('copy/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "copyThisIncluscore", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_incluscore_dto_1.SaveIncluscoreDto]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('for-company-association'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findAllForCompanyAssociation", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/theme'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findSpecificThemes", null);
__decorate([
    (0, common_1.Get)(':id/theme/:idTheme/question'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idTheme')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findSpecificQuestions", null);
__decorate([
    (0, common_1.Get)(':id/theme/:idTheme/question/:idQuestion/proposition'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idTheme')),
    __param(2, (0, common_1.Param)('idQuestion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "findSpecificPropositions", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('idIncluscore')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IncluscoreController.prototype, "deleteOne", null);
IncluscoreController = __decorate([
    (0, common_1.Controller)(routes_helper_1.INCLUSCORE_CTRL),
    __metadata("design:paramtypes", [incluscore_service_1.IncluscoreService,
        theme_service_1.ThemeIncluscoreService,
        question_service_1.QuestionIncluscoreService,
        proposition_service_1.PropositionIncluscoreService])
], IncluscoreController);
exports.IncluscoreController = IncluscoreController;
//# sourceMappingURL=incluscore.controller.js.map