"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propositionsChosenCount = void 0;
const mongoose = require("mongoose");
const commonFacetFilter_1 = require("./commonFacetFilter");
const propositionsChosenCount = (idProposition, idTeam) => {
    const $match = {
        userAnswer: new mongoose.Types.ObjectId(idProposition),
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
exports.propositionsChosenCount = propositionsChosenCount;
//# sourceMappingURL=propositionsChosenCount.js.map