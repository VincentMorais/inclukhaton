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
exports.KthScrAssociationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
let KthScrAssociationService = class KthScrAssociationService {
    constructor(kthScrDb) {
        this.kthScrDb = kthScrDb;
    }
    async save(update) {
        if (update._id) {
            await this.kthScrDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const kthScr = new this.kthScrDb(update);
        return await kthScr.save();
    }
    async findOne(id) {
        return this.kthScrDb.findById(id);
    }
    async findAll() {
        return this.kthScrDb.find();
    }
    async deleteOne(id) {
        await this.kthScrDb.findByIdAndDelete(id);
    }
};
KthScrAssociationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.KTH_SCR_ASSOCIATION_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], KthScrAssociationService);
exports.KthScrAssociationService = KthScrAssociationService;
//# sourceMappingURL=kth-scr-association.service.js.map