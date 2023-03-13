"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveTeamArborescenceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const teamArborescence_entity_1 = require("../entities/teamArborescence.entity");
class SaveTeamArborescenceDto extends (0, mapped_types_1.PartialType)(teamArborescence_entity_1.TeamArborescenceDb) {
}
exports.SaveTeamArborescenceDto = SaveTeamArborescenceDto;
//# sourceMappingURL=saveTeamArborescence.dto.js.map