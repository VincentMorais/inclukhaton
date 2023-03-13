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
exports.CompanyEntity = exports.CompanyDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const team_entity_1 = require("../../team/entities/team.entity");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const collections_provider_1 = require("../../provider/collections.provider");
const teamArborescence_entity_1 = require("./teamArborescence.entity");
const availableRegion_entity_1 = require("./availableRegion.entity");
let CompanyDb = class CompanyDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyDb.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CompanyDb.prototype, "imgPath", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.USER_COLLECTION_NAME }],
    }),
    __metadata("design:type", Array)
], CompanyDb.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.TEAM_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], CompanyDb.prototype, "teams", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => teamArborescence_entity_1.TeamArborescenceDb),
    __metadata("design:type", Object)
], CompanyDb.prototype, "teamArborescence", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], CompanyDb.prototype, "displayRegions", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.AVAILABLE_REGION_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => availableRegion_entity_1.AvailableRegionDb),
    __metadata("design:type", Object)
], CompanyDb.prototype, "availableRegions", void 0);
CompanyDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.COMPANY_COLLECTION_NAME })
], CompanyDb);
exports.CompanyDb = CompanyDb;
exports.CompanyEntity = mongoose_1.SchemaFactory.createForClass(CompanyDb);
//# sourceMappingURL=company.entity.js.map