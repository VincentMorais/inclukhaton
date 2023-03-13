"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserThemeDto = void 0;
const user_dto_1 = require("../../user/dto/user.dto");
const theme_dto_1 = require("./theme.dto");
const user_answer_dto_1 = require("./user-answer.dto");
const team_dto_1 = require("../../team/dto/team.dto");
class UserThemeDto {
    constructor(utDb) {
        var _a, _b, _c, _d;
        this.id = utDb._id;
        if ((_a = utDb.userId) === null || _a === void 0 ? void 0 : _a._id) {
            this.userId = new user_dto_1.UserDto(utDb.userId);
        }
        if ((_b = utDb.themeId) === null || _b === void 0 ? void 0 : _b._id) {
            this.themeId = new theme_dto_1.ThemeDto(utDb.themeId);
        }
        if ((_c = utDb.teamId) === null || _c === void 0 ? void 0 : _c._id) {
            this.teamId = new team_dto_1.TeamDto(utDb.teamId);
        }
        this.launchId = utDb.launchId;
        this.answeredAll = utDb.answeredAll;
        this.score = utDb.score;
        if (((_d = utDb === null || utDb === void 0 ? void 0 : utDb.answers) === null || _d === void 0 ? void 0 : _d.length) > 0) {
            this.answers = utDb.answers.map((a) => new user_answer_dto_1.UserAnswerDto(a));
        }
    }
}
exports.UserThemeDto = UserThemeDto;
//# sourceMappingURL=user-theme.dto.js.map