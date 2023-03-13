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
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
const team_dto_1 = require("../../team/dto/team.dto");
const company_dto_1 = require("../../company/dto/company.dto");
const webinar_dto_1 = require("../../webinar/dto/webinar.dto");
class UserDto {
    constructor(user, token) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!user) {
            return;
        }
        this.id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.createdFromIncluscore = user.createdFromIncluscore;
        this.enabled = user.enabled;
        this.isSuperAdmin = user.superAdmin;
        this.isCompanyAdmin = user.companyAdmin;
        this.avatarImgPath = user.avatarImgPath;
        this.jobName = user.jobName;
        this.squadName = user.squadName;
        if (((_a = user.juryOfTeams) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_b = user.juryOfTeams[0]) === null || _b === void 0 ? void 0 : _b._id)) {
            this.juryOfTeams = user.juryOfTeams.map((t) => new team_dto_1.TeamDto(t));
        }
        if (((_c = user.manageTeams) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((_d = user.manageTeams[0]) === null || _d === void 0 ? void 0 : _d._id)) {
            this.manageTeams = user.manageTeams.map((t) => new team_dto_1.TeamDto(t));
        }
        if ((_e = user.companyId) === null || _e === void 0 ? void 0 : _e._id) {
            this.company = new company_dto_1.CompanyDto(user.companyId);
        }
        if ((_f = user.teamId) === null || _f === void 0 ? void 0 : _f._id) {
            this.team = new team_dto_1.TeamDto(user.teamId);
        }
        if (token) {
            this.token = token;
        }
        this.studentNumber = user.studentNumber;
        this.presentationVideoPath = user.presentationVideoPath;
        this.hasAPassword = user.hasAPassword;
        this.lang = user.lang;
        this.npsNotation = user.npsNotation;
        this.npsComment = user.npsComment;
        this.region = user.region;
        if (((_g = user.webinars) === null || _g === void 0 ? void 0 : _g.length) > 0 && ((_h = user.webinars[0]) === null || _h === void 0 ? void 0 : _h._id)) {
            this.webinars = user.webinars.map((w) => new webinar_dto_1.WebinarDto(w));
        }
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Erreur d'identifiant utilisateur` }),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Aucun prénom utilisateur' }),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Aucun nom utilisateur' }),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map