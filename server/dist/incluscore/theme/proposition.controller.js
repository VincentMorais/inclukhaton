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
exports.PropositionController = void 0;
const common_1 = require("@nestjs/common");
const proposition_service_1 = require("./proposition.service");
const proposition_dto_1 = require("../dto/proposition.dto");
const question_service_1 = require("./question.service");
const save_proposition_dto_1 = require("../dto/creation/save.proposition.dto");
const routes_helper_1 = require("../../provider/routes.helper");
let PropositionController = class PropositionController {
    constructor(propositionService, questionService) {
        this.propositionService = propositionService;
        this.questionService = questionService;
    }
    async save(p) {
        p._id = p.id;
        const isCreation = !p._id;
        const proposition = await this.propositionService.save(p);
        if (isCreation) {
            await this.questionService.addProposition(p.incluscoreQuestionId, proposition);
        }
        return new proposition_dto_1.PropositionDto(proposition);
    }
    async findOne(id) {
        const p = await this.propositionService.findOne(id);
        return new proposition_dto_1.PropositionDto(p);
    }
    async findAll() {
        const propositions = await this.propositionService.find();
        return propositions.map((p) => new proposition_dto_1.PropositionDto(p));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_proposition_dto_1.SavePropositionDto]),
    __metadata("design:returntype", Promise)
], PropositionController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropositionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PropositionController.prototype, "findAll", null);
PropositionController = __decorate([
    (0, common_1.Controller)(routes_helper_1.PROPOSITION_SCR_CTRL),
    __metadata("design:paramtypes", [proposition_service_1.PropositionIncluscoreService,
        question_service_1.QuestionIncluscoreService])
], PropositionController);
exports.PropositionController = PropositionController;
//# sourceMappingURL=proposition.controller.js.map