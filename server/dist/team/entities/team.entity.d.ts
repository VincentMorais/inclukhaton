import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { TeamDeliveryDb } from '../../inclukathon-program/models/team-delivery.entity';
import { TeamArborescenceDb } from '../../company/entities/teamArborescence.entity';
export declare type TeamDocument = TeamDb & Document;
export declare class TeamDb {
    _id: string;
    name: string;
    enabled: boolean;
    teamDelivery: TeamDeliveryDb[];
    projectDescription: string;
    level1: TeamArborescenceDb | any;
    level2: TeamArborescenceDb | any;
    level3: TeamArborescenceDb | any;
}
export declare const TeamEntity: mongoose.Schema<Document<TeamDb, any, any>, mongoose.Model<Document<TeamDb, any, any>, any, any>, {}>;
