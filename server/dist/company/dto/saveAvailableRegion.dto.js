"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveAvailableRegionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const availableRegion_entity_1 = require("../entities/availableRegion.entity");
class SaveAvailableRegionDto extends (0, mapped_types_1.PartialType)(availableRegion_entity_1.AvailableRegionDb) {
}
exports.SaveAvailableRegionDto = SaveAvailableRegionDto;
//# sourceMappingURL=saveAvailableRegion.dto.js.map