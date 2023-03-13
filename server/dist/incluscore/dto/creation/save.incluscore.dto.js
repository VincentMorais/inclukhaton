"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIncluscoreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const incluscore_entity_1 = require("../../entities/incluscore.entity");
class SaveIncluscoreDto extends (0, mapped_types_1.PartialType)(incluscore_entity_1.IncluscoreDb) {
}
exports.SaveIncluscoreDto = SaveIncluscoreDto;
//# sourceMappingURL=save.incluscore.dto.js.map