"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userThemesByLaunchIdWithAnsweredAllTrueQuery = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const userThemesByLaunchIdWithAnsweredAllTrueQuery = (idLaunch, nbThemesMax = 0, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
        answeredAll: true,
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
                    launchId: '$launchId',
                },
                nbThemePerUser: {
                    $sum: 1,
                },
            },
        },
        {
            $match: {
                nbThemePerUser: { $gte: nbThemesMax },
            },
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.userThemesByLaunchIdWithAnsweredAllTrueQuery = userThemesByLaunchIdWithAnsweredAllTrueQuery;
//# sourceMappingURL=userThemesByLaunchIdWithAnsweredAllTrueQuery.js.map