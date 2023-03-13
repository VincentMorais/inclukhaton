import { Document } from 'mongoose';
import { DeliveriesDb } from './deliveries.entity';
import * as mongoose from 'mongoose';
import { NotationDeliveryDb } from './notation-delivery.entity';
export declare type TeamDeliveryDocument = TeamDeliveryDb & Document;
export declare class TeamDeliveryDb {
    _id: string;
    delivery: DeliveriesDb;
    filesPath: string[];
    lastUpdateUnixTime: number;
    lastUploaderUserId: string;
    notation: NotationDeliveryDb[];
}
export declare const TeamDeliveryEntity: mongoose.Schema<Document<TeamDeliveryDb, any, any>, mongoose.Model<Document<TeamDeliveryDb, any, any>, any, any>, {}>;
