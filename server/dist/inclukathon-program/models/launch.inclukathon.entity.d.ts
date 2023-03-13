import { Document } from 'mongoose';
import { CompanyDb } from '../../company/entities/company.entity';
import { TeamDb } from '../../team/entities/team.entity';
import * as mongoose from 'mongoose';
import { InclukathonProgramDb } from './inclukathon-program.entity';
export declare type LaunchInclukathonDocument = LaunchInclukathonDb & Document;
export declare class LaunchInclukathonDb {
    _id?: string;
    idInclukathon: InclukathonProgramDb | any;
    idCompany: CompanyDb | any;
    idTeam: TeamDb | any;
}
export declare const LaunchInclukathonEntity: mongoose.Schema<Document<LaunchInclukathonDb, any, any>, mongoose.Model<Document<LaunchInclukathonDb, any, any>, any, any>, {}>;
