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
exports.PropositionsIncluscoreEntity = exports.PropositionsIncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
let PropositionsIncluscoreDb = class PropositionsIncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PropositionsIncluscoreDb.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PropositionsIncluscoreDb.prototype, "title-en", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PropositionsIncluscoreDb.prototype, "title-es", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PropositionsIncluscoreDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PropositionsIncluscoreDb.prototype, "isAGoodAnswer", void 0);
PropositionsIncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME })
], PropositionsIncluscoreDb);
exports.PropositionsIncluscoreDb = PropositionsIncluscoreDb;
exports.PropositionsIncluscoreEntity = mongoose_1.SchemaFactory.createForClass(PropositionsIncluscoreDb);
//# sourceMappingURL=propositions.entity.js.map