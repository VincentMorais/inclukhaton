"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAnswerDto = void 0;
const question_dto_1 = require("./question.dto");
const proposition_dto_1 = require("./proposition.dto");
const team_dto_1 = require("../../team/dto/team.dto");
const user_dto_1 = require("../../user/dto/user.dto");
const theme_dto_1 = require("./theme.dto");
const launch_incluscore_dto_1 = require("./launch.incluscore.dto");
class UserAnswerDto {
    constructor(uDb) {
        var _a, _b, _c, _d;
        this.id = uDb._id;
        if (uDb.questionId) {
            this.questionId = new question_dto_1.QuestionDto(uDb.questionId);
        }
        if (uDb.userAnswer) {
            this.userAnswer = new proposition_dto_1.PropositionDto(uDb.userAnswer);
        }
        if ((_a = uDb.launchId) === null || _a === void 0 ? void 0 : _a._id) {
            this.launchId = new launch_incluscore_dto_1.LaunchIncluscoreDto(uDb.launchId);
        }
        if ((_b = uDb.themeId) === null || _b === void 0 ? void 0 : _b._id) {
            this.themeId = new theme_dto_1.ThemeDto(uDb.themeId);
        }
        if ((_c = uDb.userId) === null || _c === void 0 ? void 0 : _c._id) {
            this.userId = new user_dto_1.UserDto(uDb.userId);
        }
        if ((_d = uDb.teamId) === null || _d === void 0 ? void 0 : _d._id) {
            this.teamId = new team_dto_1.TeamDto(uDb.teamId);
        }
        this.isAGoodAnswer = uDb.isAGoodAnswer;
    }
}
exports.UserAnswerDto = UserAnswerDto;
//# sourceMappingURL=user-answer.dto.js.map