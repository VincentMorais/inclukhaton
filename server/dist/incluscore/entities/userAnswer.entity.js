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
exports.UserAnswerIncluscoreEntity = exports.UserAnswerIncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const class_transformer_1 = require("class-transformer");
const questions_entity_1 = require("./questions.entity");
const mongoose = require("mongoose");
const propositions_entity_1 = require("./propositions.entity");
const launch_incluscore_entity_1 = require("./launch.incluscore.entity");
const themes_entity_1 = require("./themes.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const team_entity_1 = require("../../team/entities/team.entity");
let UserAnswerIncluscoreDb = class UserAnswerIncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.QUESTIONS_SCR_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => questions_entity_1.QuestionsIncluscoreDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "questionId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => propositions_entity_1.PropositionsIncluscoreDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "userAnswer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.LAUNCH_SCR_COLLECTION,
    }),
    (0, class_transformer_1.Type)(() => launch_incluscore_entity_1.LaunchIncluscoreDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "launchId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.THEMES_SCR_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => themes_entity_1.ThemesIncluscoreDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "themeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.USER_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => user_entity_1.UserDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], UserAnswerIncluscoreDb.prototype, "teamId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserAnswerIncluscoreDb.prototype, "isAGoodAnswer", void 0);
UserAnswerIncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME })
], UserAnswerIncluscoreDb);
exports.UserAnswerIncluscoreDb = UserAnswerIncluscoreDb;
exports.UserAnswerIncluscoreEntity = mongoose_1.SchemaFactory.createForClass(UserAnswerIncluscoreDb);
//# sourceMappingURL=userAnswer.entity.js.map