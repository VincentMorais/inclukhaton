"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countRows = exports.lookupUserFromUT = void 0;
const collections_provider_1 = require("../provider/collections.provider");
exports.lookupUserFromUT = [
    {
        $lookup: {
            from: collections_provider_1.USER_COLLECTION_NAME,
            localField: 'userId',
            foreignField: '_id',
            as: 'user',
        },
    },
    {
        $unwind: '$user',
    },
];
exports.countRows = [
    {
        $group: {
            _id: '',
            items: { $sum: 1 },
        },
    },
];
//# sourceMappingURL=commonFacetFilter.js.map