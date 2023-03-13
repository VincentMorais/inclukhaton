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
exports.InclukathonProgramEntity = exports.InclukathonProgramDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const class_transformer_1 = require("class-transformer");
const mongoose = require("mongoose");
const bai_entity_1 = require("./bai.entity");
const kth_scr_association_entity_1 = require("./kth-scr-association.entity");
const deliveries_entity_1 = require("./deliveries.entity");
const luxon_1 = require("luxon");
let InclukathonProgramDb = class InclukathonProgramDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InclukathonProgramDb.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InclukathonProgramDb.prototype, "explanation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InclukathonProgramDb.prototype, "bannerImgPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InclukathonProgramDb.prototype, "programImgPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], InclukathonProgramDb.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], InclukathonProgramDb.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InclukathonProgramDb.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.BAI_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => bai_entity_1.BaiDb),
    __metadata("design:type", Array)
], InclukathonProgramDb.prototype, "bai", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.KTH_SCR_ASSOCIATION_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => kth_scr_association_entity_1.KthScrAssociationDb),
    __metadata("design:type", Array)
], InclukathonProgramDb.prototype, "kthScrAssociation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.DELIVERIES_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => deliveries_entity_1.DeliveriesDb),
    __metadata("design:type", Array)
], InclukathonProgramDb.prototype, "deliveries", void 0);
InclukathonProgramDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.INCLUKATHON_PROGRAM_COLLECTION_NAME })
], InclukathonProgramDb);
exports.InclukathonProgramDb = InclukathonProgramDb;
exports.InclukathonProgramEntity = mongoose_1.SchemaFactory.createForClass(InclukathonProgramDb);
//# sourceMappingURL=inclukathon-program.entity.js.map