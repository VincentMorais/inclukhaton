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
exports.KthScrAssociationEntity = exports.KthScrAssociationDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const incluscore_entity_1 = require("../../incluscore/entities/incluscore.entity");
const class_transformer_1 = require("class-transformer");
const mongoose = require("mongoose");
const launch_incluscore_entity_1 = require("../../incluscore/entities/launch.incluscore.entity");
const luxon_1 = require("luxon");
let KthScrAssociationDb = class KthScrAssociationDb {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.INCLUSCORE_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => incluscore_entity_1.IncluscoreDb),
    __metadata("design:type", incluscore_entity_1.IncluscoreDb)
], KthScrAssociationDb.prototype, "incluscore", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.LAUNCH_SCR_COLLECTION,
    }),
    (0, class_transformer_1.Type)(() => launch_incluscore_entity_1.LaunchIncluscoreDb),
    __metadata("design:type", launch_incluscore_entity_1.LaunchIncluscoreDb)
], KthScrAssociationDb.prototype, "launchIncluscore", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], KthScrAssociationDb.prototype, "locked", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], KthScrAssociationDb.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], KthScrAssociationDb.prototype, "endDate", void 0);
KthScrAssociationDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.KTH_SCR_ASSOCIATION_COLLECTION_NAME })
], KthScrAssociationDb);
exports.KthScrAssociationDb = KthScrAssociationDb;
exports.KthScrAssociationEntity = mongoose_1.SchemaFactory.createForClass(KthScrAssociationDb);
//# sourceMappingURL=kth-scr-association.entity.js.map