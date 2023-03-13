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
exports.ThemesIncluscoreEntity = exports.ThemesIncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const questions_entity_1 = require("./questions.entity");
const class_transformer_1 = require("class-transformer");
const mongoose = require("mongoose");
let ThemesIncluscoreDb = class ThemesIncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "name-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "name-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ThemesIncluscoreDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "imgPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "imgPath2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ThemesIncluscoreDb.prototype, "imgPath3", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.QUESTIONS_SCR_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => questions_entity_1.QuestionsIncluscoreDb),
    __metadata("design:type", Array)
], ThemesIncluscoreDb.prototype, "questions", void 0);
ThemesIncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.THEMES_SCR_COLLECTION_NAME })
], ThemesIncluscoreDb);
exports.ThemesIncluscoreDb = ThemesIncluscoreDb;
exports.ThemesIncluscoreEntity = mongoose_1.SchemaFactory.createForClass(ThemesIncluscoreDb);
//# sourceMappingURL=themes.entity.js.map