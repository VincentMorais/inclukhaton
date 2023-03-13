"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KthScrAssociationDto = void 0;
const incluscore_dto_1 = require("../../../incluscore/dto/incluscore.dto");
const launch_incluscore_dto_1 = require("../../../incluscore/dto/launch.incluscore.dto");
const DateTimeHelper_1 = require("../../../helper/DateTimeHelper");
const luxon_1 = require("luxon");
class KthScrAssociationDto {
    constructor(kthScrAssociationDb) {
        var _a;
        this.id = kthScrAssociationDb._id;
        if (kthScrAssociationDb.incluscore) {
            this.incluscore = new incluscore_dto_1.IncluscoreDto(kthScrAssociationDb.incluscore);
        }
        if ((_a = kthScrAssociationDb.launchIncluscore) === null || _a === void 0 ? void 0 : _a._id) {
            this.launchIncluscore = new launch_incluscore_dto_1.LaunchIncluscoreDto(kthScrAssociationDb.launchIncluscore);
        }
        this.locked = kthScrAssociationDb.locked;
        this.startDate = DateTimeHelper_1.DateTimeHelper.toDateTime(kthScrAssociationDb.startDate);
        this.endDate = DateTimeHelper_1.DateTimeHelper.toDateTime(kthScrAssociationDb.endDate);
        const now = luxon_1.DateTime.now();
        this.isInProgress = DateTimeHelper_1.DateTimeHelper.isIn(now, this.startDate, this.endDate);
        if (this.isInProgress) {
            this.durationUntilEnd = DateTimeHelper_1.DateTimeHelper.getDurationFormatted(now, this.endDate);
        }
        else if (DateTimeHelper_1.DateTimeHelper.isBefore(now, this.startDate)) {
            this.durationUntilStart = DateTimeHelper_1.DateTimeHelper.getDurationFormatted(now, this.startDate);
        }
    }
}
exports.KthScrAssociationDto = KthScrAssociationDto;
//# sourceMappingURL=kth-scr-association.dto.js.map