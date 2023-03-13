"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_dto_1 = require("./user.dto");
class LoggedUserDto extends (0, mapped_types_1.PartialType)(user_dto_1.UserDto) {
}
exports.LoggedUserDto = LoggedUserDto;
//# sourceMappingURL=logged.user.dto.js.map