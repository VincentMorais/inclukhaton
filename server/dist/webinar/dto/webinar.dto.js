"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebinarDto = void 0;
const luxon_1 = require("luxon");
const DateTimeHelper_1 = require("../../helper/DateTimeHelper");
const company_dto_1 = require("../../company/dto/company.dto");
class WebinarDto {
    constructor(webinarDb) {
        this.id = webinarDb._id;
        this.title = webinarDb.title;
        this['title-en'] = webinarDb['title-en'];
        this['title-es'] = webinarDb['title-es'];
        this.description = webinarDb.description;
        this['description-en'] = webinarDb['description-en'];
        this['description-es'] = webinarDb['description-es'];
        this.score = webinarDb.score;
        this.path = webinarDb.path;
        this.enabled = webinarDb.enabled;
        this.startDate = DateTimeHelper_1.DateTimeHelper.toDateTime(webinarDb.startDate);
        this.endDate = DateTimeHelper_1.DateTimeHelper.toDateTime(webinarDb.endDate);
        const now = luxon_1.DateTime.now();
        this.isInProgress = DateTimeHelper_1.DateTimeHelper.isIn(now, this.startDate, this.endDate);
        if (this.isInProgress) {
            this.durationUntilEnd = DateTimeHelper_1.DateTimeHelper.getDurationFormatted(now, this.endDate);
        }
        else if (DateTimeHelper_1.DateTimeHelper.isBefore(now, this.startDate)) {
            this.durationUntilStart = DateTimeHelper_1.DateTimeHelper.getDurationFormatted(now, this.startDate);
        }
        this.formattedStartDate = this.startDate ? DateTimeHelper_1.DateTimeHelper.formatWithDateOnly(this.startDate) : '';
        this.formattedEndDate = this.endDate ? DateTimeHelper_1.DateTimeHelper.formatWithDateOnly(this.endDate) : '';
        this.company = webinarDb.company;
        if (this.company && this.company._id) {
            this.company = new company_dto_1.CompanyDto(webinarDb.company);
        }
    }
}
exports.WebinarDto = WebinarDto;
//# sourceMappingURL=webinar.dto.js.map