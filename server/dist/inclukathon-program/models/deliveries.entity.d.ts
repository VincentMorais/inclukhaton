import { Document } from 'mongoose';
import { NotationDeliveryDb } from './notation-delivery.entity';
import * as mongoose from 'mongoose';
import { DateTime } from 'luxon';
export declare type DeliveriesDocument = DeliveriesDb & Document;
export declare class DeliveriesDb {
    _id: string;
    explanation: string;
    locked: boolean;
    startDate: DateTime;
    endDate: DateTime;
    notation: NotationDeliveryDb[];
}
export declare const DeliveriesEntity: mongoose.Schema<Document<DeliveriesDb, any, any>, mongoose.Model<Document<DeliveriesDb, any, any>, any, any>, {}>;
