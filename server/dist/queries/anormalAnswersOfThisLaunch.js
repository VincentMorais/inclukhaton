"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAnswersOfThisLaunchWithoutCondition = exports.anormalAnswersOfThisLaunch = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const anormalAnswersOfThisLaunch = (idLaunch, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        {
            $match,
        },
        {
            $group: {
                _id: {
                    userId: '$userId',
                    questionId: '$questionId',
                },
                items: { $sum: 1 },
            },
        },
        {
            $match: {
                items: { $gt: 1 },
            },
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.anormalAnswersOfThisLaunch = anormalAnswersOfThisLaunch;
const allAnswersOfThisLaunchWithoutCondition = (idLaunch, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        {
            $match,
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.allAnswersOfThisLaunchWithoutCondition = allAnswersOfThisLaunchWithoutCondition;
//# sourceMappingURL=anormalAnswersOfThisLaunch.js.map