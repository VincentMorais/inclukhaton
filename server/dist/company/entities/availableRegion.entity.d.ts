import { Document } from 'mongoose';
export declare type AvailableRegionDocument = AvailableRegionDb & Document;
export declare class AvailableRegionDb {
    _id: string;
    name: string;
}
export declare const AvailableRegionEntity: import("mongoose").Schema<Document<AvailableRegionDb, any, any>, import("mongoose").Model<Document<AvailableRegionDb, any, any>, any, any>, {}>;
