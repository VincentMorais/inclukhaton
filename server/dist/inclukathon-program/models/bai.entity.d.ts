import { Document } from 'mongoose';
export declare type BaiDocument = BaiDb & Document;
export declare class BaiDb {
    _id: string;
    rubrique: string;
    name: string;
    imgCoverPath: string;
    filesPath: string[];
}
export declare const BaiEntity: import("mongoose").Schema<Document<BaiDb, any, any>, import("mongoose").Model<Document<BaiDb, any, any>, any, any>, {}>;
