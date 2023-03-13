"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersWithAtLeastOneAnswerByLaunchIdQuery = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const usersWithAtLeastOneAnswerByLaunchIdQuery = (idLaunch, idTeam) => {
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
                },
            },
        },
        ...commonFacetFilter_1.countRows,
    ];
};
exports.usersWithAtLeastOneAnswerByLaunchIdQuery = usersWithAtLeastOneAnswerByLaunchIdQuery;
//# sourceMappingURL=usersWithAtLeastOneAnswerByLaunchIdQuery.js.map