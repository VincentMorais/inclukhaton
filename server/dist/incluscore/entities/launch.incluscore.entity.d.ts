import { Document } from 'mongoose';
import { CompanyDb } from '../../company/entities/company.entity';
import { IncluscoreDb } from './incluscore.entity';
import * as mongoose from 'mongoose';
import { UserThemeIncluscoreDb } from './userTheme.entity';
export declare type LaunchIncluscoreDocument = LaunchIncluscoreDb & Document;
export declare class LaunchIncluscoreDb {
    _id?: string;
    idIncluscore: IncluscoreDb | any;
    idCompany: CompanyDb | any;
    userThemes: UserThemeIncluscoreDb[];
}
export declare const LaunchIncluscoreEntity: mongoose.Schema<Document<LaunchIncluscoreDb, any, any>, mongoose.Model<Document<LaunchIncluscoreDb, any, any>, any, any>, {}>;
