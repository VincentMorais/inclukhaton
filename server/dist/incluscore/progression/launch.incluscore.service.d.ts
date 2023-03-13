import { Model } from 'mongoose';
import { LaunchIncluscoreDb, LaunchIncluscoreDocument } from '../entities/launch.incluscore.entity';
import { SaveLaunchIncluscoreDto } from '../dto/creation/save.launch.incluscore.dto';
import { UserThemeIncluscoreDb, UserThemeIncluscoreDocument } from '../entities/userTheme.entity';
import { UserAnswerIncluscoreDocument } from '../entities/userAnswer.entity';
export declare class LaunchIncluscoreService {
    private readonly launchScrDb;
    private readonly userThemeIncluscoreDb;
    private readonly userAnswerIncluscoreDb;
    constructor(launchScrDb: Model<LaunchIncluscoreDocument>, userThemeIncluscoreDb: Model<UserThemeIncluscoreDocument>, userAnswerIncluscoreDb: Model<UserAnswerIncluscoreDocument>);
    save(update: SaveLaunchIncluscoreDto): Promise<LaunchIncluscoreDb>;
    findOneLight(id: string, currentUserId: string): Promise<LaunchIncluscoreDb>;
    isInclucardLaunch(id: string): Promise<boolean>;
    findOne(id: string, selectOnly?: {}): Promise<LaunchIncluscoreDb>;
    findForStats(id: string, selectOnly?: {}): Promise<LaunchIncluscoreDb>;
    findAllForAdminCompanyEditionPage(idCompany: string): Promise<LaunchIncluscoreDb[]>;
    findAllByCompanyId(idCompany: string): Promise<LaunchIncluscoreDb[]>;
    findAll(): Promise<LaunchIncluscoreDb[]>;
    addUserThemeIfNotExist(userTheme: UserThemeIncluscoreDb): Promise<void>;
    deleteOne(id: string, idCompany: string): Promise<LaunchIncluscoreDb[]>;
    fixDuplicateThemes(): Promise<string[]>;
    fixDuplicateAnswers(launch: LaunchIncluscoreDb): Promise<void>;
    fixDuplicate(): Promise<void>;
}
