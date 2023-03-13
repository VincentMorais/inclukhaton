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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const question_dto_1 = require("../dto/question.dto");
const theme_service_1 = require("./theme.service");
const save_question_dto_1 = require("../dto/creation/save.question.dto");
const routes_helper_1 = require("../../provider/routes.helper");
let QuestionController = class QuestionController {
    constructor(questionService, themeService) {
        this.questionService = questionService;
        this.themeService = themeService;
    }
    async save(q) {
        q._id = q.id;
        const isCreation = !q._id;
        delete q.propositions;
        const question = await this.questionService.save(q);
        if (isCreation) {
            await this.themeService.addQuestion(q.incluscoreThemeId, question);
        }
        return new question_dto_1.QuestionDto(question);
    }
    async findOne(id) {
        const q = await this.questionService.findOne(id);
        return new question_dto_1.QuestionDto(q);
    }
    async findAll() {
        const questions = await this.questionService.find();
        return questions.map((q) => new question_dto_1.QuestionDto(q));
    }
    async deleteOne(idQuestion, idTheme) {
        await this.themeService.removeIdQuestionFromTheme(idTheme, idQuestion);
        await this.questionService.deleteOne(idQuestion);
        const theme = await this.themeService.findOne(idTheme);
        return theme.questions.map((q) => new question_dto_1.QuestionDto(q));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_question_dto_1.SaveQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('idQuestion')),
    __param(1, (0, common_1.Body)('idTheme')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteOne", null);
QuestionController = __decorate([
    (0, common_1.Controller)(routes_helper_1.QUESTION_SCR_CTRL),
    __metadata("design:paramtypes", [question_service_1.QuestionIncluscoreService,
        theme_service_1.ThemeIncluscoreService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map