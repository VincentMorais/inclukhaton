import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { BaiDb } from './bai.entity';
import { KthScrAssociationDb } from './kth-scr-association.entity';
import { DeliveriesDb } from './deliveries.entity';
import { DateTime } from 'luxon';
export declare type InclukathonProgramDocument = InclukathonProgramDb & Document;
export declare class InclukathonProgramDb {
    _id: string;
    name: string;
    explanation: string;
    bannerImgPath: string;
    programImgPath: string;
    startDate: DateTime;
    endDate: DateTime;
    subject: string;
    bai: BaiDb[];
    kthScrAssociation: KthScrAssociationDb[];
    deliveries: DeliveriesDb[];
}
export declare const InclukathonProgramEntity: mongoose.Schema<Document<InclukathonProgramDb, any, any>, mongoose.Model<Document<InclukathonProgramDb, any, any>, any, any>, {}>;
