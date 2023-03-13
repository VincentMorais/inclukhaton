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
exports.NotationDeliveryEntity = exports.NotationDeliveryDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
let NotationDeliveryDb = class NotationDeliveryDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NotationDeliveryDb.prototype, "question", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], NotationDeliveryDb.prototype, "values", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NotationDeliveryDb.prototype, "selectedValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NotationDeliveryDb.prototype, "idNotationEvaluated", void 0);
NotationDeliveryDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.NOTATION_DELIVERY_COLLECTION_NAME })
], NotationDeliveryDb);
exports.NotationDeliveryDb = NotationDeliveryDb;
exports.NotationDeliveryEntity = mongoose_1.SchemaFactory.createForClass(NotationDeliveryDb);
//# sourceMappingURL=notation-delivery.entity.js.map