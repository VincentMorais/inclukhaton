"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery = exports.userThemesFinishedByThemeIdQuery = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const userThemesFinishedByThemeIdQuery = (idTheme, idTeam) => {
    const $match = {
        themeId: new mongoose.Types.ObjectId(idTheme),
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
                },
            },
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.userThemesFinishedByThemeIdQuery = userThemesFinishedByThemeIdQuery;
const userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery = (idTheme, idTeam) => {
    const $match = {
        themeId: new mongoose.Types.ObjectId(idTheme),
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        { $match },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery = userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery;
//# sourceMappingURL=userThemesFinishedByThemeIdQuery.js.map