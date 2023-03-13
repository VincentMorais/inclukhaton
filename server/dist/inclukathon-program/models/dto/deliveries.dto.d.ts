import { DeliveriesDb } from '../deliveries.entity';
import { NotationDeliveryDto } from './notation-delivery.dto';
import { DateTime } from 'luxon';
export declare class DeliveriesDto {
    constructor(deliveriesDb: DeliveriesDb);
    _id?: string;
    id: string;
    explanation: string;
    locked: boolean;
    startDate: DateTime;
    endDate: DateTime;
    notation: NotationDeliveryDto[];
    isInProgress?: boolean;
    isAfter?: boolean;
    durationUntilEnd?: string;
    durationUntilStart?: string;
}
