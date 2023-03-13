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
exports.PropositionIncluscoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
let PropositionIncluscoreService = class PropositionIncluscoreService {
    constructor(propositionsDb) {
        this.propositionsDb = propositionsDb;
    }
    async save(update, forceCreation = false) {
        if (update._id && !forceCreation) {
            await this.propositionsDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newObj = new this.propositionsDb(update);
        return await newObj.save();
    }
    async findOne(id) {
        return await this.propositionsDb.findById(id).exec();
    }
    async findBy(_champs, value) {
        return await this.propositionsDb.find({ champs: value }).count().exec();
    }
    async find() {
        return await this.propositionsDb.find().exec();
    }
    async countAll() {
        return await this.propositionsDb.find().count().exec();
    }
};
PropositionIncluscoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PropositionIncluscoreService);
exports.PropositionIncluscoreService = PropositionIncluscoreService;
//# sourceMappingURL=proposition.service.js.map