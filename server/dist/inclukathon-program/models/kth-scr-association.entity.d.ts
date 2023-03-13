import { Document } from 'mongoose';
import { IncluscoreDb } from '../../incluscore/entities/incluscore.entity';
import * as mongoose from 'mongoose';
import { LaunchIncluscoreDb } from '../../incluscore/entities/launch.incluscore.entity';
import { DateTime } from 'luxon';
export declare type KthScrAssociationDocument = KthScrAssociationDb & Document;
export declare class KthScrAssociationDb {
    _id: string;
    incluscore: IncluscoreDb;
    launchIncluscore: LaunchIncluscoreDb;
    locked: boolean;
    startDate: DateTime;
    endDate: DateTime;
}
export declare const KthScrAssociationEntity: mongoose.Schema<Document<KthScrAssociationDb, any, any>, mongoose.Model<Document<KthScrAssociationDb, any, any>, any, any>, {}>;
