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
exports.WebinarEntity = exports.WebinarDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const luxon_1 = require("luxon");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const company_entity_1 = require("../../company/entities/company.entity");
let WebinarDb = class WebinarDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "title-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "title-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "description-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "description-es", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1000 }),
    __metadata("design:type", Number)
], WebinarDb.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebinarDb.prototype, "path", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], WebinarDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], WebinarDb.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], WebinarDb.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.COMPANY_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => company_entity_1.CompanyDb),
    __metadata("design:type", Object)
], WebinarDb.prototype, "company", void 0);
WebinarDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.WEBINAR_COLLECTION_NAME })
], WebinarDb);
exports.WebinarDb = WebinarDb;
exports.WebinarEntity = mongoose_1.SchemaFactory.createForClass(WebinarDb);
//# sourceMappingURL=webinar.entity.js.map