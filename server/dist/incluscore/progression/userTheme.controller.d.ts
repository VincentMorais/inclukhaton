import { UserThemeService } from './userTheme.service';
import { UserThemeDto } from '../dto/user-theme.dto';
import { SaveUserThemeDto } from '../dto/creation/save.user-theme.dto';
import { LaunchIncluscoreService } from './launch.incluscore.service';
export declare class UserThemeController {
    private readonly userThemeService;
    private readonly launchService;
    constructor(userThemeService: UserThemeService, launchService: LaunchIncluscoreService);
    save(update: SaveUserThemeDto): Promise<UserThemeDto>;
    populateUt(): Promise<void>;
    findAll(): Promise<UserThemeDto[]>;
    findByUserId(userId: string): Promise<UserThemeDto[]>;
    deleteOne(id: string): Promise<UserThemeDto[]>;
}
