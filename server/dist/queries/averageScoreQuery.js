"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageScoreQuery = void 0;
const mongoose = require("mongoose");
const averageScoreQuery = (idLaunch, idTheme, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
        answeredAll: true,
    };
    if (idTheme) {
        $match['themeId'] = new mongoose.Types.ObjectId(idTheme);
    }
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        { $match },
        {
            $group: {
                _id: '$userId',
                totalScore: { $sum: '$score' },
            },
        },
        {
            $group: {
                _id: '',
                items: { $avg: '$totalScore' },
            },
        },
    ];
};
exports.averageScoreQuery = averageScoreQuery;
//# sourceMappingURL=averageScoreQuery.js.map