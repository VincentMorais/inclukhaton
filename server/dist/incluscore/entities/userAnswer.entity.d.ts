import { Document } from 'mongoose';
import { QuestionsIncluscoreDb } from './questions.entity';
import * as mongoose from 'mongoose';
import { PropositionsIncluscoreDb } from './propositions.entity';
import { LaunchIncluscoreDb } from './launch.incluscore.entity';
import { ThemesIncluscoreDb } from './themes.entity';
import { UserDb } from '../../user/entity/user.entity';
import { TeamDb } from '../../team/entities/team.entity';
export declare type UserAnswerIncluscoreDocument = UserAnswerIncluscoreDb & Document;
export declare class UserAnswerIncluscoreDb {
    _id: string;
    questionId: QuestionsIncluscoreDb | any;
    userAnswer: PropositionsIncluscoreDb | any;
    launchId: LaunchIncluscoreDb | any;
    themeId: ThemesIncluscoreDb | any;
    userId: UserDb | any;
    teamId: TeamDb | any;
    isAGoodAnswer: boolean;
}
export declare const UserAnswerIncluscoreEntity: mongoose.Schema<Document<UserAnswerIncluscoreDb, any, any>, mongoose.Model<Document<UserAnswerIncluscoreDb, any, any>, any, any>, {}>;
