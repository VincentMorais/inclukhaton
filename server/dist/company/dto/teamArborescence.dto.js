"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamArborescenceDto = void 0;
class TeamArborescenceDto {
    constructor(teamArborescenceDb) {
        this.id = teamArborescenceDb._id;
        this.name = teamArborescenceDb.name;
        this.level = teamArborescenceDb.level;
    }
}
exports.TeamArborescenceDto = TeamArborescenceDto;
//# sourceMappingURL=teamArborescence.dto.js.map