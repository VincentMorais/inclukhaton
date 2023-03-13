"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveWebinarDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const webinar_entity_1 = require("../entities/webinar.entity");
class SaveWebinarDto extends (0, mapped_types_1.PartialType)(webinar_entity_1.WebinarDb) {
}
exports.SaveWebinarDto = SaveWebinarDto;
//# sourceMappingURL=save.webinar.dto.js.map