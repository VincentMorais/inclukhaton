import { LaunchIncluscoreDb } from '../entities/launch.incluscore.entity';
import { IncluscoreDto } from './incluscore.dto';
import { CompanyDto } from '../../company/dto/company.dto';
import { TeamDto } from '../../team/dto/team.dto';
import { UserThemeDto } from './user-theme.dto';
export declare class LaunchIncluscoreDto {
    constructor(launchScrDb: LaunchIncluscoreDb);
    id?: string;
    idIncluscore: IncluscoreDto;
    idCompany: CompanyDto;
    idTeam: TeamDto;
    userThemes: UserThemeDto[] | any;
}
