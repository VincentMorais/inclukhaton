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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryKthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
let DeliveryKthService = class DeliveryKthService {
    constructor(deliveryDb, notationDeliveryDb) {
        this.deliveryDb = deliveryDb;
        this.notationDeliveryDb = notationDeliveryDb;
    }
    async save(update) {
        if (update._id) {
            await this.deliveryDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const delivery = new this.deliveryDb(update);
        return await delivery.save();
    }
    async saveNotationDelivery(update) {
        if (update._id) {
            await this.notationDeliveryDb.updateOne({ _id: update._id }, update);
            return this.notationDeliveryDb.findById(update._id);
        }
        const notationDb = new this.notationDeliveryDb(update);
        return await notationDb.save();
    }
    async pushNewNotationToDelivery(id, notation) {
        const delivery = await this.findOne(id);
        delivery.notation.push(notation);
        return await delivery.save();
    }
    async findOne(id) {
        return this.deliveryDb.findById(id).populate('notation');
    }
    async findAll() {
        return this.deliveryDb.find();
    }
    async deleteOne(id) {
        await this.deliveryDb.findByIdAndDelete(id);
    }
};
DeliveryKthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.DELIVERIES_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.NOTATION_DELIVERY_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DeliveryKthService);
exports.DeliveryKthService = DeliveryKthService;
//# sourceMappingURL=delivery-kth.service.js.map