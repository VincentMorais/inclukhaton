"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveQuestionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const questions_entity_1 = require("../../entities/questions.entity");
class SaveQuestionDto extends (0, mapped_types_1.PartialType)(questions_entity_1.QuestionsIncluscoreDb) {
}
exports.SaveQuestionDto = SaveQuestionDto;
//# sourceMappingURL=save.question.dto.js.map