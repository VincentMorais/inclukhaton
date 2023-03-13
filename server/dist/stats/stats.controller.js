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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("../incluscore/theme/question.service");
const proposition_service_1 = require("../incluscore/theme/proposition.service");
const userAnswer_entity_1 = require("../incluscore/entities/userAnswer.entity");
let StatsController = class StatsController {
    constructor(propositionService) {
        this.propositionService = propositionService;
    }
    async get_pourcentage() {
        const goodAnswer = await this.propositionService.findBy("isAGoodAnswer", true);
        const badAnswer = await this.propositionService.findBy("isAGoodAnswer", false);
        const allAnswer = await this.propositionService.countAll();
        const pourcentageGoodAnswer = (goodAnswer / allAnswer) * 100;
        const pourcentageFalseAnswer = (badAnswer / allAnswer) * 100;
        return [pourcentageGoodAnswer, pourcentageFalseAnswer];
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "get_pourcentage", null);
StatsController = __decorate([
    (0, common_1.Controller)('stats'),
    __metadata("design:paramtypes", [proposition_service_1.PropositionIncluscoreService])
], StatsController);
exports.StatsController = StatsController;
//# sourceMappingURL=stats.controller.js.map