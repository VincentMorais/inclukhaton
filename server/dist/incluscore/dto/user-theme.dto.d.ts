import { UserThemeIncluscoreDb } from '../entities/userTheme.entity';
import { UserDto } from '../../user/dto/user.dto';
import { ThemeDto } from './theme.dto';
import { UserAnswerDto } from './user-answer.dto';
import { TeamDto } from '../../team/dto/team.dto';
export declare class UserThemeDto {
    constructor(utDb: UserThemeIncluscoreDb);
    id: string;
    userId: UserDto;
    themeId: ThemeDto;
    launchId: string;
    answeredAll: boolean;
    score: number;
    answers: UserAnswerDto[];
    teamId: TeamDto;
}
