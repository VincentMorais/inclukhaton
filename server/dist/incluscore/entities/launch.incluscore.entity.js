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
exports.LaunchIncluscoreEntity = exports.LaunchIncluscoreDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const class_transformer_1 = require("class-transformer");
const company_entity_1 = require("../../company/entities/company.entity");
const incluscore_entity_1 = require("./incluscore.entity");
const mongoose = require("mongoose");
const userTheme_entity_1 = require("./userTheme.entity");
let LaunchIncluscoreDb = class LaunchIncluscoreDb {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.INCLUSCORE_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => incluscore_entity_1.IncluscoreDb),
    __metadata("design:type", Object)
], LaunchIncluscoreDb.prototype, "idIncluscore", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.COMPANY_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => company_entity_1.CompanyDb),
    __metadata("design:type", Object)
], LaunchIncluscoreDb.prototype, "idCompany", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.USER_THEME_SCR_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => userTheme_entity_1.UserThemeIncluscoreDb),
    __metadata("design:type", Array)
], LaunchIncluscoreDb.prototype, "userThemes", void 0);
LaunchIncluscoreDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.LAUNCH_SCR_COLLECTION })
], LaunchIncluscoreDb);
exports.LaunchIncluscoreDb = LaunchIncluscoreDb;
exports.LaunchIncluscoreEntity = mongoose_1.SchemaFactory.createForClass(LaunchIncluscoreDb);
//# sourceMappingURL=launch.incluscore.entity.js.map