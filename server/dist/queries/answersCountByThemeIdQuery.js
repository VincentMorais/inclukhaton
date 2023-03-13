"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.begunThemesCount = exports.finishedThemesCount = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const finishedThemesCount = (idLaunch, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
        answeredAll: true,
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        { $match },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.finishedThemesCount = finishedThemesCount;
const begunThemesCount = (idLaunch, idTeam) => {
    const $match = {
        launchId: new mongoose.Types.ObjectId(idLaunch),
    };
    if (idTeam) {
        $match['teamId'] = new mongoose.Types.ObjectId(idTeam);
    }
    return [
        { $match },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.begunThemesCount = begunThemesCount;
//# sourceMappingURL=answersCountByThemeIdQuery.js.map