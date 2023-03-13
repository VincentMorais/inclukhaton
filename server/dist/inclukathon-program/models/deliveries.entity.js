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
exports.DeliveriesEntity = exports.DeliveriesDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const notation_delivery_entity_1 = require("./notation-delivery.entity");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const luxon_1 = require("luxon");
let DeliveriesDb = class DeliveriesDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DeliveriesDb.prototype, "explanation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], DeliveriesDb.prototype, "locked", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], DeliveriesDb.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", luxon_1.DateTime)
], DeliveriesDb.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.NOTATION_DELIVERY_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => notation_delivery_entity_1.NotationDeliveryDb),
    __metadata("design:type", Array)
], DeliveriesDb.prototype, "notation", void 0);
DeliveriesDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.DELIVERIES_COLLECTION_NAME })
], DeliveriesDb);
exports.DeliveriesDb = DeliveriesDb;
exports.DeliveriesEntity = mongoose_1.SchemaFactory.createForClass(DeliveriesDb);
//# sourceMappingURL=deliveries.entity.js.map