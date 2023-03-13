"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveBaiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const bai_entity_1 = require("../../bai.entity");
class SaveBaiDto extends (0, mapped_types_1.PartialType)(bai_entity_1.BaiDb) {
}
exports.SaveBaiDto = SaveBaiDto;
//# sourceMappingURL=save.bai.dto.js.map