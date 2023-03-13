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
exports.TeamDeliveryEntity = exports.TeamDeliveryDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const class_transformer_1 = require("class-transformer");
const deliveries_entity_1 = require("./deliveries.entity");
const mongoose = require("mongoose");
const notation_delivery_entity_1 = require("./notation-delivery.entity");
let TeamDeliveryDb = class TeamDeliveryDb {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.DELIVERIES_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => deliveries_entity_1.DeliveriesDb),
    __metadata("design:type", deliveries_entity_1.DeliveriesDb)
], TeamDeliveryDb.prototype, "delivery", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], TeamDeliveryDb.prototype, "filesPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamDeliveryDb.prototype, "lastUpdateUnixTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamDeliveryDb.prototype, "lastUploaderUserId", void 0);
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
], TeamDeliveryDb.prototype, "notation", void 0);
TeamDeliveryDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.TEAM_DELIVERY_COLLECTION_NAME })
], TeamDeliveryDb);
exports.TeamDeliveryDb = TeamDeliveryDb;
exports.TeamDeliveryEntity = mongoose_1.SchemaFactory.createForClass(TeamDeliveryDb);
//# sourceMappingURL=team-delivery.entity.js.map