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
exports.QuestionIncluscoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
let QuestionIncluscoreService = class QuestionIncluscoreService {
    constructor(questionsDb, propositionsDb) {
        this.questionsDb = questionsDb;
        this.propositionsDb = propositionsDb;
    }
    async save(update, forceCreation = false) {
        if (update._id && !forceCreation) {
            await this.questionsDb.updateOne({ _id: update._id }, update);
            return this.findOne(update._id);
        }
        const newObj = new this.questionsDb(update);
        return await newObj.save();
    }
    async addProposition(idQuestion, proposition) {
        const question = await this.findOne(idQuestion);
        question.propositions.push(proposition);
        await question.save();
    }
    async findOne(idQuestion) {
        return await this.questionsDb.findById(idQuestion).populate('propositions').exec();
    }
    async find() {
        return await this.questionsDb.find().populate('propositions').exec();
    }
    async deleteOne(id) {
        const q = await this.findOne(id);
        for (const p of q.propositions) {
            await this.propositionsDb.findByIdAndDelete(p._id);
        }
        await this.questionsDb.findByIdAndDelete(id);
    }
};
QuestionIncluscoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.QUESTIONS_SCR_COLLECTION_NAME)),
    __param(1, (0, mongoose_1.InjectModel)(collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], QuestionIncluscoreService);
exports.QuestionIncluscoreService = QuestionIncluscoreService;
//# sourceMappingURL=question.service.js.map