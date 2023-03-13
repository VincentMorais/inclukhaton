"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InclukathonDto = void 0;
const bai_dto_1 = require("./bai.dto");
const kth_scr_association_dto_1 = require("./kth-scr-association.dto");
const deliveries_dto_1 = require("./deliveries.dto");
const luxon_1 = require("luxon");
const DateTimeHelper_1 = require("../../../helper/DateTimeHelper");
class InclukathonDto {
    constructor(inclukathonDb) {
        this.id = inclukathonDb._id;
        this.name = inclukathonDb.name;
        this.explanation = inclukathonDb.explanation;
        this.bannerImgPath = inclukathonDb.bannerImgPath;
        this.programImgPath = inclukathonDb.programImgPath;
        this.startDate = DateTimeHelper_1.DateTimeHelper.toDateTime(inclukathonDb.startDate);
        this.endDate = DateTimeHelper_1.DateTimeHelper.toDateTime(inclukathonDb.endDate);
        this.subject = inclukathonDb.subject;
        if (inclukathonDb.bai) {
            this.bai = inclukathonDb.bai.map((b) => new bai_dto_1.BaiDto(b));
        }
        if (inclukathonDb.kthScrAssociation) {
            this.kthScrAssociation = inclukathonDb.kthScrAssociation.map((k) => new kth_scr_association_dto_1.KthScrAssociationDto(k));
        }
        if (inclukathonDb.deliveries) {
            this.deliveries = inclukathonDb.deliveries.map((d) => new deliveries_dto_1.DeliveriesDto(d));
        }
        this.inProgress = DateTimeHelper_1.DateTimeHelper.isIn(luxon_1.DateTime.now(), DateTimeHelper_1.DateTimeHelper.toDateTime(this.startDate), DateTimeHelper_1.DateTimeHelper.toDateTime(this.endDate));
        this.notStarted = DateTimeHelper_1.DateTimeHelper.isBefore(luxon_1.DateTime.now(), DateTimeHelper_1.DateTimeHelper.toDateTime(this.startDate));
    }
}
exports.InclukathonDto = InclukathonDto;
//# sourceMappingURL=inclukathon.dto.js.map