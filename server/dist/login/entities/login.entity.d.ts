import { Document } from 'mongoose';
export declare type LoginDocument = LoginDb & Document;
export declare class LoginDb {
    userId: string;
    token: string;
}
export declare const LoginEntity: import("mongoose").Schema<Document<LoginDb, any, any>, import("mongoose").Model<Document<LoginDb, any, any>, any, any>, {}>;
