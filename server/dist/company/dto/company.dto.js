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
exports.CompanyDto = void 0;
const class_validator_1 = require("class-validator");
const user_dto_1 = require("../../user/dto/user.dto");
const team_dto_1 = require("../../team/dto/team.dto");
const teamArborescence_dto_1 = require("./teamArborescence.dto");
const availableRegion_dto_1 = require("./availableRegion.dto");
class CompanyDto {
    constructor(companyDb) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.id = companyDb._id;
        this.name = companyDb.name;
        this.imgPath = companyDb.imgPath;
        this.displayRegions = companyDb.displayRegions;
        if (((_a = companyDb.teamArborescence) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_b = companyDb.teamArborescence[0]) === null || _b === void 0 ? void 0 : _b._id)) {
            this.teamArborescence = (_c = companyDb.teamArborescence) === null || _c === void 0 ? void 0 : _c.map((t) => new teamArborescence_dto_1.TeamArborescenceDto(t));
        }
        if (((_d = companyDb.teams) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = companyDb.teams[0]) === null || _e === void 0 ? void 0 : _e._id)) {
            this.teams = (_f = companyDb.teams) === null || _f === void 0 ? void 0 : _f.map((t) => new team_dto_1.TeamDto(t));
        }
        if (((_g = companyDb.users) === null || _g === void 0 ? void 0 : _g.length) > 0 && ((_h = companyDb.users[0]) === null || _h === void 0 ? void 0 : _h._id)) {
            this.users = (_j = companyDb.users) === null || _j === void 0 ? void 0 : _j.map((u) => new user_dto_1.UserDto(u));
        }
        if (((_k = companyDb.availableRegions) === null || _k === void 0 ? void 0 : _k.length) > 0 && ((_l = companyDb.availableRegions[0]) === null || _l === void 0 ? void 0 : _l._id)) {
            this.availableRegions = (_m = companyDb.availableRegions) === null || _m === void 0 ? void 0 : _m.map((t) => new availableRegion_dto_1.AvailableRegionDto(t));
        }
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Erreur d'identifiant company` }),
    __metadata("design:type", String)
], CompanyDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Aucun nom company' }),
    __metadata("design:type", String)
], CompanyDto.prototype, "name", void 0);
exports.CompanyDto = CompanyDto;
//# sourceMappingURL=company.dto.js.map