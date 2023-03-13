import { Model } from 'mongoose';
import { UserThemeIncluscoreDb, UserThemeIncluscoreDocument } from '../entities/userTheme.entity';
import { UserThemeDto } from '../dto/user-theme.dto';
import { UserAnswerIncluscoreDb, UserAnswerIncluscoreDocument } from '../entities/userAnswer.entity';
import { SaveUserThemeDto } from '../dto/creation/save.user-theme.dto';
import { IncluscoreService } from '../incluscore.service';
import { ThemeIncluscoreService } from '../theme/theme.service';
import { PropositionIncluscoreService } from '../theme/proposition.service';
import { LaunchIncluscoreService } from './launch.incluscore.service';
export declare class UserThemeService {
    private readonly userThemeDb;
    private readonly userAnswerDb;
    private readonly themeIncluscoreService;
    private readonly propositionService;
    private readonly incluscoreService;
    private readonly launchService;
    constructor(userThemeDb: Model<UserThemeIncluscoreDocument>, userAnswerDb: Model<UserAnswerIncluscoreDocument>, themeIncluscoreService: ThemeIncluscoreService, propositionService: PropositionIncluscoreService, incluscoreService: IncluscoreService, launchService: LaunchIncluscoreService);
    static readonly SCORE_FOR_INCLUCARD = 50;
    static readonly SCORE_FOR_INCLUSCORE = 100;
    saveUserTheme(update: SaveUserThemeDto, answer: UserAnswerIncluscoreDb): Promise<UserThemeIncluscoreDb>;
    retrieveUserThemeData(userThemeToSave: UserThemeIncluscoreDb, update: SaveUserThemeDto, propositionChosenId: string): Promise<UserThemeIncluscoreDb>;
    saveUserAnswerAndUserTheme(update: SaveUserThemeDto): Promise<UserThemeIncluscoreDb>;
    findOne(id: string): Promise<UserThemeIncluscoreDb>;
    findAll(): Promise<UserThemeDto[]>;
    findByLaunchId(launchId: string): Promise<UserThemeDto[]>;
    findByUserId(userId: any): Promise<UserThemeDto[]>;
    deleteOne(id: string): Promise<UserThemeDto[]>;
    removeUserAnswers(idUser: string): Promise<void>;
    populateUT(): Promise<void>;
}
