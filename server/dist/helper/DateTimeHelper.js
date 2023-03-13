"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeHelper = void 0;
const luxon_1 = require("luxon");
class DateTimeHelper {
    static isBefore(date, limiteDate) {
        return date < limiteDate;
    }
    static isAfter(date, limiteDate) {
        return date >= limiteDate;
    }
    static isIn(current, startDate, endDate) {
        if (!current || !startDate || !endDate) {
            return null;
        }
        const currentWithoutTime = this.toDateWithoutTime(current);
        const startDateWithoutTime = this.toDateWithoutTime(startDate);
        const endDateWithoutTime = this.toDateWithoutTime(endDate);
        const interval = luxon_1.Interval.fromDateTimes(startDateWithoutTime, endDateWithoutTime);
        return interval.contains(currentWithoutTime);
    }
    static formatWithDateOnly(date, defaultFormat = luxon_1.DateTime.DATE_FULL) {
        var _a;
        return (_a = DateTimeHelper.toDateTime(date, true)) === null || _a === void 0 ? void 0 : _a.toLocaleString(defaultFormat);
    }
    static getSimpleDatepickerOptions() {
        return {
            autoclose: true,
            language: 'fr',
            format: DateTimeHelper.defaultDatePickerFormat,
            todayHighlight: true,
            todayBtn: 'linked',
        };
    }
    static getDurationFormatted(dateTime, otherDateTime) {
        const a = DateTimeHelper.toDateWithoutTime(dateTime);
        const b = DateTimeHelper.toDateWithoutTime(otherDateTime);
        if (Math.abs(a.diff(b).as('day')) <= 0) {
            return luxon_1.Duration.fromObject({
                minutes: Math.abs(a.diff(b, 'minutes', { conversionAccuracy: 'casual' }).as('minutes')),
            }).toHuman();
        }
        return luxon_1.Duration.fromObject({
            days: Math.abs(a.diff(b, 'days', { conversionAccuracy: 'casual' }).as('days')),
        }).toHuman();
    }
    static toDateWithoutTime(date) {
        return luxon_1.DateTime.utc(date.get('year'), date.get('month'), date.get('day'), 0, 0, 0, 0);
    }
    static toJsDate(obj) {
        if (!obj) {
            return null;
        }
        return DateTimeHelper.toDateTime(obj).toJSDate();
    }
    static toDateTime(obj, forceNoTime = false) {
        if (!obj) {
            return null;
        }
        if (typeof obj === 'string') {
            obj = new Date(obj);
        }
        if (luxon_1.DateTime.isDateTime(obj)) {
            const dateTime = obj;
            return forceNoTime ? DateTimeHelper.toDateWithoutTime(dateTime) : dateTime;
        }
        const nativeDate = obj;
        return luxon_1.DateTime.utc(nativeDate.getFullYear(), nativeDate.getMonth() + 1, nativeDate.getDate(), forceNoTime ? 0 : nativeDate.getHours(), forceNoTime ? 0 : nativeDate.getMinutes(), forceNoTime ? 0 : nativeDate.getSeconds(), forceNoTime ? 0 : nativeDate.getMilliseconds());
    }
}
exports.DateTimeHelper = DateTimeHelper;
DateTimeHelper.defaultDatePickerFormat = 'dd MM yyyy';
//# sourceMappingURL=DateTimeHelper.js.map