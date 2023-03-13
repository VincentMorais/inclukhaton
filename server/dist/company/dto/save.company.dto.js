"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCompanyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const company_entity_1 = require("../entities/company.entity");
class SaveCompanyDto extends (0, mapped_types_1.PartialType)(company_entity_1.CompanyDb) {
}
exports.SaveCompanyDto = SaveCompanyDto;
//# sourceMappingURL=save.company.dto.js.map