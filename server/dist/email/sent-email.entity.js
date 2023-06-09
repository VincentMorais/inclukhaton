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
exports.EmailEntity = exports.EmailDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../provider/collections.provider");
let EmailDb = class EmailDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "from", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "to", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "html", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmailDb.prototype, "mailType", void 0);
EmailDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.EMAIL_SENT_COLLECTION_NAME })
], EmailDb);
exports.EmailDb = EmailDb;
exports.EmailEntity = mongoose_1.SchemaFactory.createForClass(EmailDb);
//# sourceMappingURL=sent-email.entity.js.map