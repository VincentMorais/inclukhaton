import { Document } from 'mongoose';
export declare type NotationDeliveryDocument = NotationDeliveryDb & Document;
export declare class NotationDeliveryDb {
    _id?: string;
    question: string;
    values: string[];
    selectedValue: string;
    idNotationEvaluated?: string;
}
export declare const NotationDeliveryEntity: import("mongoose").Schema<Document<NotationDeliveryDb, any, any>, import("mongoose").Model<Document<NotationDeliveryDb, any, any>, any, any>, {}>;
