"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveTeamDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const team_entity_1 = require("../entities/team.entity");
class SaveTeamDto extends (0, mapped_types_1.PartialType)(team_entity_1.TeamDb) {
}
exports.SaveTeamDto = SaveTeamDto;
//# sourceMappingURL=save.team.dto.js.map