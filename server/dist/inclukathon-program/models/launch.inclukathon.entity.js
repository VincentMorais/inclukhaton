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
exports.LaunchInclukathonEntity = exports.LaunchInclukathonDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const class_transformer_1 = require("class-transformer");
const company_entity_1 = require("../../company/entities/company.entity");
const team_entity_1 = require("../../team/entities/team.entity");
const mongoose = require("mongoose");
const inclukathon_program_entity_1 = require("./inclukathon-program.entity");
let LaunchInclukathonDb = class LaunchInclukathonDb {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.INCLUKATHON_PROGRAM_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => inclukathon_program_entity_1.InclukathonProgramDb),
    __metadata("design:type", Object)
], LaunchInclukathonDb.prototype, "idInclukathon", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.COMPANY_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => company_entity_1.CompanyDb),
    __metadata("design:type", Object)
], LaunchInclukathonDb.prototype, "idCompany", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => team_entity_1.TeamDb),
    __metadata("design:type", Object)
], LaunchInclukathonDb.prototype, "idTeam", void 0);
LaunchInclukathonDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.LAUNCH_KTH_COLLECTION })
], LaunchInclukathonDb);
exports.LaunchInclukathonDb = LaunchInclukathonDb;
exports.LaunchInclukathonEntity = mongoose_1.SchemaFactory.createForClass(LaunchInclukathonDb);
//# sourceMappingURL=launch.inclukathon.entity.js.map