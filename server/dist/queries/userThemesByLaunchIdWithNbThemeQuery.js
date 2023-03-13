"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userThemesByLaunchIdWithNbThemeQuery = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const userThemesByLaunchIdWithNbThemeQuery = (idLaunch, nbThemesMax = 0, idTeam) => {
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
                    launchId: '$launchId',
                },
                nbThemePerUser: {
                    $sum: 1,
                },
            },
        },
        {
            $match: {
                nbThemePerUser: { $gt: nbThemesMax },
            },
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.userThemesByLaunchIdWithNbThemeQuery = userThemesByLaunchIdWithNbThemeQuery;
//# sourceMappingURL=userThemesByLaunchIdWithNbThemeQuery.js.map