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
exports.QuestionsIncluscoreEntity = exports.QuestionsIncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const propositions_entity_1 = require("./propositions.entity");
const class_transformer_1 = require("class-transformer");
const mongoose = require("mongoose");
let QuestionsIncluscoreDb = class QuestionsIncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "title-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "title-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], QuestionsIncluscoreDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "answerExplanation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "answerExplanation-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QuestionsIncluscoreDb.prototype, "answerExplanation-es", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => propositions_entity_1.PropositionsIncluscoreDb),
    __metadata("design:type", Array)
], QuestionsIncluscoreDb.prototype, "propositions", void 0);
QuestionsIncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.QUESTIONS_SCR_COLLECTION_NAME })
], QuestionsIncluscoreDb);
exports.QuestionsIncluscoreDb = QuestionsIncluscoreDb;
exports.QuestionsIncluscoreEntity = mongoose_1.SchemaFactory.createForClass(QuestionsIncluscoreDb);
//# sourceMappingURL=questions.entity.js.map