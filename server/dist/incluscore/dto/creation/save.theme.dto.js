"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveThemeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const themes_entity_1 = require("../../entities/themes.entity");
class SaveThemeDto extends (0, mapped_types_1.PartialType)(themes_entity_1.ThemesIncluscoreDb) {
}
exports.SaveThemeDto = SaveThemeDto;
//# sourceMappingURL=save.theme.dto.js.map