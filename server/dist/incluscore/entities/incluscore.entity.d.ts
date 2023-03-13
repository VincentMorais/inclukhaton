import { Document } from 'mongoose';
import { ThemesIncluscoreDb } from './themes.entity';
import * as mongoose from 'mongoose';
export declare type IncluscoreDocument = IncluscoreDb & Document;
export declare class IncluscoreDb {
    _id: string;
    name: string;
    'name-en': string;
    'name-es': string;
    smallName: string;
    'smallName-en': string;
    'smallName-es': string;
    enabled: boolean;
    canBePublic: boolean;
    description: string;
    'description-en': string;
    'description-es': string;
    themes: ThemesIncluscoreDb[];
    isInclucard: boolean;
    inclucardColor: string;
    incluscoreColor: string;
    secondIncluscoreColor: string;
    displayNewStudentNumber: boolean;
}
export declare const IncluscoreEntity: mongoose.Schema<Document<IncluscoreDb, any, any>, mongoose.Model<Document<IncluscoreDb, any, any>, any, any>, {}>;
