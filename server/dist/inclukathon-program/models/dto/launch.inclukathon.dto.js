"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchInclukathonDto = void 0;
const inclukathon_dto_1 = require("./inclukathon.dto");
const company_dto_1 = require("../../../company/dto/company.dto");
const team_dto_1 = require("../../../team/dto/team.dto");
class LaunchInclukathonDto {
    constructor(launchKthDb) {
        var _a;
        if (!launchKthDb) {
            return;
        }
        this.id = launchKthDb._id;
        if ((_a = launchKthDb.idInclukathon) === null || _a === void 0 ? void 0 : _a._id) {
            this.idInclukathon = new inclukathon_dto_1.InclukathonDto(launchKthDb.idInclukathon);
        }
        this.idCompany = new company_dto_1.CompanyDto(launchKthDb.idCompany);
        this.idTeam = new team_dto_1.TeamDto(launchKthDb.idTeam);
    }
}
exports.LaunchInclukathonDto = LaunchInclukathonDto;
//# sourceMappingURL=launch.inclukathon.dto.js.map