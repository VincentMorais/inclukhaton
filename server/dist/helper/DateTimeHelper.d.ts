import { DateTime } from 'luxon';
import { IDatepicker } from '../../../web/typings/datepicker';
export declare class DateTimeHelper {
    static defaultDatePickerFormat: string;
    static isBefore(date: DateTime, limiteDate: DateTime): boolean;
    static isAfter(date: DateTime, limiteDate: DateTime): boolean;
    static isIn(current: DateTime, startDate: DateTime, endDate: DateTime): boolean;
    static formatWithDateOnly(date: DateTime, defaultFormat?: Intl.DateTimeFormatOptions): string;
    static getSimpleDatepickerOptions(): IDatepicker;
    static getDurationFormatted(dateTime: DateTime, otherDateTime: DateTime): string;
    static toDateWithoutTime(date: DateTime): DateTime;
    static toJsDate(obj: any): Date;
    static toDateTime(obj: any, forceNoTime?: boolean): DateTime;
}
