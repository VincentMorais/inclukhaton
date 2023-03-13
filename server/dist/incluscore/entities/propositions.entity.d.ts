import { Document } from 'mongoose';
export declare type PropositionsIncluscoreDocument = PropositionsIncluscoreDb & Document;
export declare class PropositionsIncluscoreDb {
    _id?: string;
    title: string;
    'title-en': string;
    'title-es': string;
    enabled: boolean;
    isAGoodAnswer: boolean;
}
export declare const PropositionsIncluscoreEntity: import("mongoose").Schema<Document<PropositionsIncluscoreDb, any, any>, import("mongoose").Model<Document<PropositionsIncluscoreDb, any, any>, any, any>, {}>;
