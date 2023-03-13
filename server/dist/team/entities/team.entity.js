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
exports.TeamEntity = exports.TeamDb = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose = require("mongoose");
const class_transformer_1 = require("class-transformer");
const team_delivery_entity_1 = require("../../inclukathon-program/models/team-delivery.entity");
const teamArborescence_entity_1 = require("../../company/entities/teamArborescence.entity");
let TeamDb = class TeamDb {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamDb.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], TeamDb.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: collections_provider_1.TEAM_DELIVERY_COLLECTION_NAME,
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => team_delivery_entity_1.TeamDeliveryDb),
    __metadata("design:type", Array)
], TeamDb.prototype, "teamDelivery", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamDb.prototype, "projectDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => teamArborescence_entity_1.TeamArborescenceDb),
    __metadata("design:type", Object)
], TeamDb.prototype, "level1", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => teamArborescence_entity_1.TeamArborescenceDb),
    __metadata("design:type", Object)
], TeamDb.prototype, "level2", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME,
    }),
    (0, class_transformer_1.Type)(() => teamArborescence_entity_1.TeamArborescenceDb),
    __metadata("design:type", Object)
], TeamDb.prototype, "level3", void 0);
TeamDb = __decorate([
    (0, mongoose_1.Schema)({ collection: collections_provider_1.TEAM_COLLECTION_NAME })
], TeamDb);
exports.TeamDb = TeamDb;
exports.TeamEntity = mongoose_1.SchemaFactory.createForClass(TeamDb);
//# sourceMappingURL=team.entity.js.map