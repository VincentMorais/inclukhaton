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
exports.TeamDto = void 0;
const class_validator_1 = require("class-validator");
const team_delivery_dto_1 = require("../../inclukathon-program/models/dto/team-delivery.dto");
const teamArborescence_dto_1 = require("../../company/dto/teamArborescence.dto");
class TeamDto {
    constructor(teamDb) {
        var _a, _b, _c, _d, _e;
        if (!teamDb) {
            return;
        }
        this.id = teamDb._id;
        this.name = teamDb.name;
        this.enabled = teamDb.enabled;
        if (((_a = teamDb.teamDelivery) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_b = teamDb.teamDelivery[0]) === null || _b === void 0 ? void 0 : _b._id)) {
            this.teamDelivery = teamDb.teamDelivery.map((t) => new team_delivery_dto_1.TeamDeliveryDto(t));
        }
        this.projectDescription = teamDb.projectDescription;
        this.level1 = teamDb.level1 && new teamArborescence_dto_1.TeamArborescenceDto(teamDb.level1);
        this.level2 = teamDb.level2 && new teamArborescence_dto_1.TeamArborescenceDto(teamDb.level2);
        this.level3 = teamDb.level3 && new teamArborescence_dto_1.TeamArborescenceDto(teamDb.level3);
        this.arborescence = '';
        if (this.level1) {
            this.arborescence += `${(_c = this.level1) === null || _c === void 0 ? void 0 : _c.name} / `;
        }
        if (this.level2) {
            this.arborescence += `${(_d = this.level2) === null || _d === void 0 ? void 0 : _d.name} / `;
        }
        if (this.level3) {
            this.arborescence += `${(_e = this.level3) === null || _e === void 0 ? void 0 : _e.name} / `;
        }
        this.arborescence += `${this.name}`;
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Erreur d'identifiant team` }),
    __metadata("design:type", String)
], TeamDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Aucun nom team' }),
    __metadata("design:type", String)
], TeamDto.prototype, "name", void 0);
exports.TeamDto = TeamDto;
//# sourceMappingURL=team.dto.js.map