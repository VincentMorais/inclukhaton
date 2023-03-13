import { LaunchIncluscoreDto } from '../dto/launch.incluscore.dto';
import { LaunchIncluscoreService } from './launch.incluscore.service';
import { SaveLaunchIncluscoreDto } from '../dto/creation/save.launch.incluscore.dto';
import { LScrStatService } from './launch.incluscore.stats.service';
import { BasicFacetStatsDto } from '../dto/basic.facet.stats.dto';
import { UserThemeService } from './userTheme.service';
import { TeamService } from '../../team/team.service';
export declare class LaunchScrController {
    private readonly launchScrService;
    private readonly userThemeService;
    private readonly launchIncluscoreStatsService;
    private readonly teamService;
    constructor(launchScrService: LaunchIncluscoreService, userThemeService: UserThemeService, launchIncluscoreStatsService: LScrStatService, teamService: TeamService);
    save(launch: SaveLaunchIncluscoreDto): Promise<LaunchIncluscoreDto[]>;
    findLaunchForIncluscoreApp(id: string, currentUserId: string): Promise<LaunchIncluscoreDto>;
    findAllForAdminCompanyEditionPage(idCompany: string): Promise<LaunchIncluscoreDto[]>;
    findStatsForLaunchStatPage(idLaunch: string): Promise<BasicFacetStatsDto>;
    findStatsForSingleTeamStatPage(idLaunch: string, idTeam: string): Promise<BasicFacetStatsDto>;
    findAll(): Promise<LaunchIncluscoreDto[]>;
    deleteOne(id: string, idCompany: string): Promise<LaunchIncluscoreDto[]>;
    fixDuplicate(): Promise<string>;
}
