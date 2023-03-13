"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answersCountByQuestionIdQuery = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const answersCountByQuestionIdQuery = (idQuestion, idTheme, idLaunch, goodAnswer, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
        themeId: new mongoose.Types.ObjectId(idTheme),
        isAGoodAnswer: goodAnswer,
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    if (idQuestion) {
        $match['questionId'] = new mongoose.Types.ObjectId(idQuestion);
    }
    return [
        {
            $match,
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.answersCountByQuestionIdQuery = answersCountByQuestionIdQuery;
//# sourceMappingURL=answersCountByQuestionIdQuery.js.map