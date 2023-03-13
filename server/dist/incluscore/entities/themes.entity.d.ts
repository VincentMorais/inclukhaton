import { Document } from 'mongoose';
import { QuestionsIncluscoreDb } from './questions.entity';
import * as mongoose from 'mongoose';
export declare type ThemesIncluscoreDocument = ThemesIncluscoreDb & Document;
export declare class ThemesIncluscoreDb {
    _id?: string;
    name: string;
    'name-en': string;
    'name-es': string;
    enabled: boolean;
    imgPath: string;
    imgPath2: string;
    imgPath3: string;
    questions: QuestionsIncluscoreDb[];
}
export declare const ThemesIncluscoreEntity: mongoose.Schema<Document<ThemesIncluscoreDb, any, any>, mongoose.Model<Document<ThemesIncluscoreDb, any, any>, any, any>, {}>;
