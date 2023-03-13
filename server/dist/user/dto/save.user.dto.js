"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_entity_1 = require("../entity/user.entity");
class SaveUserDto extends (0, mapped_types_1.PartialType)(user_entity_1.UserDb) {
}
exports.SaveUserDto = SaveUserDto;
//# sourceMappingURL=save.user.dto.js.map