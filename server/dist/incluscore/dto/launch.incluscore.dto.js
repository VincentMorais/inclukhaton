"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchIncluscoreDto = void 0;
const incluscore_dto_1 = require("./incluscore.dto");
const company_dto_1 = require("../../company/dto/company.dto");
const user_theme_dto_1 = require("./user-theme.dto");
class LaunchIncluscoreDto {
    constructor(launchScrDb) {
        var _a, _b, _c, _d, _e;
        if (!launchScrDb) {
            return;
        }
        this.id = launchScrDb._id;
        if ((_a = launchScrDb.idIncluscore) === null || _a === void 0 ? void 0 : _a._id) {
            this.idIncluscore = new incluscore_dto_1.IncluscoreDto(launchScrDb.idIncluscore);
        }
        if ((_b = launchScrDb.idCompany) === null || _b === void 0 ? void 0 : _b._id) {
            this.idCompany = new company_dto_1.CompanyDto(launchScrDb.idCompany);
        }
        this.userThemes = launchScrDb.userThemes;
        if (((_c = launchScrDb.userThemes) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((_d = launchScrDb.userThemes[0]) === null || _d === void 0 ? void 0 : _d._id)) {
            this.userThemes = (_e = launchScrDb.userThemes) === null || _e === void 0 ? void 0 : _e.map((l) => new user_theme_dto_1.UserThemeDto(l));
        }
    }
}
exports.LaunchIncluscoreDto = LaunchIncluscoreDto;
//# sourceMappingURL=launch.incluscore.dto.js.map