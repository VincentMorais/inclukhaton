import { Document } from 'mongoose';
import { PropositionsIncluscoreDb } from './propositions.entity';
import * as mongoose from 'mongoose';
export declare type QuestionsIncluscoreDocument = QuestionsIncluscoreDb & Document;
export declare class QuestionsIncluscoreDb {
    _id?: string;
    title: string;
    'title-en': string;
    'title-es': string;
    enabled: boolean;
    answerExplanation: string;
    'answerExplanation-en': string;
    'answerExplanation-es': string;
    propositions: PropositionsIncluscoreDb[];
}
export declare const QuestionsIncluscoreEntity: mongoose.Schema<Document<QuestionsIncluscoreDb, any, any>, mongoose.Model<Document<QuestionsIncluscoreDb, any, any>, any, any>, {}>;
