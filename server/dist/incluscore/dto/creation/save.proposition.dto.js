"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavePropositionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const propositions_entity_1 = require("../../entities/propositions.entity");
class SavePropositionDto extends (0, mapped_types_1.PartialType)(propositions_entity_1.PropositionsIncluscoreDb) {
}
exports.SavePropositionDto = SavePropositionDto;
//# sourceMappingURL=save.proposition.dto.js.map