"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUserThemeDto = exports.SaveUserAnswerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const userTheme_entity_1 = require("../../entities/userTheme.entity");
const userAnswer_entity_1 = require("../../entities/userAnswer.entity");
class SaveUserAnswerDto extends (0, mapped_types_1.PartialType)(userAnswer_entity_1.UserAnswerIncluscoreDb) {
}
exports.SaveUserAnswerDto = SaveUserAnswerDto;
class SaveUserThemeDto extends (0, mapped_types_1.PartialType)(userTheme_entity_1.UserThemeIncluscoreDb) {
}
exports.SaveUserThemeDto = SaveUserThemeDto;
//# sourceMappingURL=save.user-theme.dto.js.map