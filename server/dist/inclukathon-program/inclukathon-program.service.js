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
exports.InclukathonProgramService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../provider/collections.provider");
const mongoose_2 = require("mongoose");
const bai_kth_service_1 = require("./bai/bai-kth.service");
let InclukathonProgramService = class InclukathonProgramService {
    constructor(inclukathonDb, kthScrAssociationDb, deliveriesDb, baiKthService) {
        this.inclukathonDb = inclukathonDb;
        this.kthScrAssociationDb = kthScrAssociationDb;
        this.deliveriesDb = deliveriesDb;
        this.baiKthService = baiKthService;
    }
    async save(update) {
        if (update._id) {
            await this.inclukathonDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newInclukathon = new this.inclukathonDb(update);
        return await newInclukathon.save();
    }
    async saveBaiToKth(id, bai) {
        const kth = await this.findOne(id);
        kth.bai.push(bai);
        return await kth.save();
    }
    async saveDeliveryToKth(id, delivery) {
        const kth = await this.findOne(id);
        kth.deliveries.push(delivery);
        return await kth.save();
    }
    async saveKthScrAssociationToKth(id, kthScrAssociation) {
        const kth = await this.findOne(id);
        kth.kthScrAssociation.push(kthScrAssociation);
        return await kth.save();
    }
    async findOne(id) {
        return this.inclukathonDb
            .findById(id)
            .populate('bai')
            .populate({ path: 'kthScrAssociation', populate: 'incluscore' })
            .populate({ path: 'deliveries', populate: 'notation' });
    }
    async findAll(light = false) {
        if (light) {
            return this.inclukathonDb.find({}, { _id: 1, name: 1 });
        }
        return this.inclukathonDb
            .find()
            .populate('bai')
            .populate({ path: 'kthScrAssociation', populate: 'incluscore' })
            .populate({ path: 'deliveries', populate: 'notation' });
    }
    async deleteOne(id) {
        const inclukathon = await this.findOne(id);
        for (const b of inclukathon.bai) {
            await this.baiKthService.deleteOne(b._id);
        }
        for (const k of inclukathon.kthScrAssociation) {
            await this.kthScrAssociationDb.findByIdAndDelete(k._id);
        }
        for (const d of inclukathon.deliveries) {
            await this.deliveriesDb.findByIdAndDelete(d._id);
        }
        await this.inclukathonDb.findByIdAndDelete(id);
    }
};
InclukathonProgramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.INCLUKATHON_PROGRAM_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.KTH_SCR_ASSOCIATION_COLLECTION_NAME)),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.DELIVERIES_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        bai_kth_service_1.BaiKthService])
], InclukathonProgramService);
exports.InclukathonProgramService = InclukathonProgramService;
//# sourceMappingURL=inclukathon-program.service.js.map