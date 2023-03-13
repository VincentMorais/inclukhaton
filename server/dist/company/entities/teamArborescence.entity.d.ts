import { Document } from 'mongoose';
export declare type TeamArborescenceDocument = TeamArborescenceDb & Document;
export declare class TeamArborescenceDb {
    _id: string;
    name: string;
    level: number;
}
export declare const TeamArborescenceEntity: import("mongoose").Schema<Document<TeamArborescenceDb, any, any>, import("mongoose").Model<Document<TeamArborescenceDb, any, any>, any, any>, {}>;
