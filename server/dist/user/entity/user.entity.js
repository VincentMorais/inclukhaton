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
exports.UserEntity = exports.UserDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const team_entity_1 = require("../../team/entities/team.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const collections_provider_1 = require("../../provider/collections.provider");
const LangUtils_1 = require("../../translations/LangUtils");
const webinar_entity_1 = require("../../webinar/entities/webinar.entity");
const availableRegion_entity_1 = require("../../company/entities/availableRegion.entity");
let UserDb = class UserDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "pwd", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserDb.prototype, "createdFromIncluscore", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], UserDb.prototype, "teamId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.TEAM_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Array)
], UserDb.prototype, "teamIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.TEAM_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], UserDb.prototype, "manageTeams", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.TEAM_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], UserDb.prototype, "juryOfTeams", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.COMPANY_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => company_entity_1.CompanyDb),
    __metadata("design:type", Object)
], UserDb.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserDb.prototype, "companyAdmin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserDb.prototype, "superAdmin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "avatarImgPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "studentNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "presentationVideoPath", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "jobName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "squadName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], UserDb.prototype, "hasAPassword", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: LangUtils_1.ILang.FR }),
    __metadata("design:type", String)
], UserDb.prototype, "lang", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], UserDb.prototype, "npsNotation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDb.prototype, "npsComment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: collections_provider_1.WEBINAR_COLLECTION_NAME }],
    }),
    (0, class_transformer_1.Type)(() => webinar_entity_1.WebinarDb),
    __metadata("design:type", Array)
], UserDb.prototype, "webinars", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.AVAILABLE_REGION_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => availableRegion_entity_1.AvailableRegionDb),
    __metadata("design:type", Object)
], UserDb.prototype, "region", void 0);
UserDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.USER_COLLECTION_NAME })
], UserDb);
exports.UserDb = UserDb;
exports.UserEntity = mongoose_1.SchemaFactory.createForClass(UserDb);
//# sourceMappingURL=user.entity.js.map