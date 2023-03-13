import { Document } from 'mongoose';
import { UserAnswerIncluscoreDb } from './userAnswer.entity';
import * as mongoose from 'mongoose';
import { UserDb } from '../../user/entity/user.entity';
import { ThemesIncluscoreDb } from './themes.entity';
import { LaunchIncluscoreDb } from './launch.incluscore.entity';
import { TeamDb } from '../../team/entities/team.entity';
export declare type UserThemeIncluscoreDocument = UserThemeIncluscoreDb & Document;
export declare class UserThemeIncluscoreDb {
    _id?: string;
    userId: UserDb | any;
    themeId: ThemesIncluscoreDb | any;
    launchId: LaunchIncluscoreDb | any;
    answeredAll: boolean;
    score: number;
    answers: UserAnswerIncluscoreDb[] | any;
    teamId: TeamDb | any;
}
export declare const UserThemeIncluscoreEntity: mongoose.Schema<Document<UserThemeIncluscoreDb, any, any>, mongoose.Model<Document<UserThemeIncluscoreDb, any, any>, any, any>, {}>;
