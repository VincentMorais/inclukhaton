import { Document } from 'mongoose';
import { UserDb } from '../../user/entity/user.entity';
import { TeamDb } from '../../team/entities/team.entity';
import * as mongoose from 'mongoose';
import { TeamArborescenceDb } from './teamArborescence.entity';
import { AvailableRegionDb } from './availableRegion.entity';
export declare type CompanyDocument = CompanyDb & Document;
export declare class CompanyDb {
    _id: string;
    name: string;
    imgPath: string;
    users: UserDb[];
    teams: TeamDb[] | any;
    teamArborescence: TeamArborescenceDb[] | any;
    displayRegions: boolean;
    availableRegions: AvailableRegionDb[] | any;
}
export declare const CompanyEntity: mongoose.Schema<Document<CompanyDb, any, any>, mongoose.Model<Document<CompanyDb, any, any>, any, any>, {}>;
