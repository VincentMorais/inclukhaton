import { UserAnswerIncluscoreDb } from '../entities/userAnswer.entity';
import { QuestionDto } from './question.dto';
import { PropositionDto } from './proposition.dto';
import { TeamDto } from '../../team/dto/team.dto';
import { UserDto } from '../../user/dto/user.dto';
import { ThemeDto } from './theme.dto';
import { LaunchIncluscoreDto } from './launch.incluscore.dto';
export declare class UserAnswerDto {
    constructor(uDb: UserAnswerIncluscoreDb);
    id?: string;
    questionId: QuestionDto | any;
    userAnswer: PropositionDto | any;
    hasUpdate?: boolean;
    _id?: string;
    launchId: LaunchIncluscoreDto;
    themeId: ThemeDto;
    userId: UserDto;
    teamId: TeamDto;
    isAGoodAnswer: boolean;
}
