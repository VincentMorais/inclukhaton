"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveriesDto = void 0;
const notation_delivery_dto_1 = require("./notation-delivery.dto");
const luxon_1 = require("luxon");
const DateTimeHelper_1 = require("../../../helper/DateTimeHelper");
class DeliveriesDto {
    constructor(deliveriesDb) {
        var _a;
        this.id = deliveriesDb._id;
        this.explanation = deliveriesDb.explanation;
        this.locked = deliveriesDb.locked;
        this.startDate = DateTimeHelper_1.DateTimeHelper.toDateTime(deliveriesDb.startDate);
        this.endDate = DateTimeHelper_1.DateTimeHelper.toDateTime(deliveriesDb.endDate);
        if (((_a = deliveriesDb.notation) === null || _a === void 0 ? void 0 : _a.length) > 0 && deliveriesDb.notation[0]._id) {
            this.notation = deliveriesDb.notation.map((n) => new notation_delivery_dto_1.NotationDeliveryDto(n));
        }
        this.isAfter = DateTimeHelper_1.DateTimeHelper.isAfter(luxon_1.DateTime.now(), this.endDate);
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
exports.DeliveriesDto = DeliveriesDto;
//# sourceMappingURL=deliveries.dto.js.map