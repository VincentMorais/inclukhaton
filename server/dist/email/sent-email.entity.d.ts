import { Document } from 'mongoose';
export declare type EmailDocument = EmailDb & Document;
export declare class EmailDb {
    _id?: string;
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
    mailType?: string;
}
export declare const EmailEntity: import("mongoose").Schema<Document<EmailDb, any, any>, import("mongoose").Model<Document<EmailDb, any, any>, any, any>, {}>;
