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
exports.IncluscoreEntity = exports.IncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const themes_entity_1 = require("./themes.entity");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
let IncluscoreDb = class IncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "name-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "name-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "smallName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "smallName-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "smallName-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], IncluscoreDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], IncluscoreDb.prototype, "canBePublic", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "description-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "description-es", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.THEMES_SCR_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => themes_entity_1.ThemesIncluscoreDb),
    __metadata("design:type", Array)
], IncluscoreDb.prototype, "themes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], IncluscoreDb.prototype, "isInclucard", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "inclucardColor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "incluscoreColor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IncluscoreDb.prototype, "secondIncluscoreColor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], IncluscoreDb.prototype, "displayNewStudentNumber", void 0);
IncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.INCLUSCORE_COLLECTION_NAME })
], IncluscoreDb);
exports.IncluscoreDb = IncluscoreDb;
exports.IncluscoreEntity = mongoose_1.SchemaFactory.createForClass(IncluscoreDb);
//# sourceMappingURL=incluscore.entity.js.map