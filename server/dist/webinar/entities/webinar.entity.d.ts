import { Document } from 'mongoose';
import { DateTime } from 'luxon';
import * as mongoose from 'mongoose';
import { CompanyDb } from '../../company/entities/company.entity';
export declare type WebinarDocument = WebinarDb & Document;
export declare class WebinarDb {
    _id: string;
    title: string;
    'title-en': string;
    'title-es': string;
    description: string;
    'description-en': string;
    'description-es': string;
    score: number;
    path: string;
    enabled: boolean;
    startDate: DateTime;
    endDate: DateTime;
    company?: CompanyDb | any;
}
export declare const WebinarEntity: mongoose.Schema<Document<WebinarDb, any, any>, mongoose.Model<Document<WebinarDb, any, any>, any, any>, {}>;
