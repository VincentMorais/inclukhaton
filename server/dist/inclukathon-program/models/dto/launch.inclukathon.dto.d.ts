import { LaunchInclukathonDb } from '../launch.inclukathon.entity';
import { InclukathonDto } from './inclukathon.dto';
import { CompanyDto } from '../../../company/dto/company.dto';
import { TeamDto } from '../../../team/dto/team.dto';
export declare class LaunchInclukathonDto {
    constructor(launchKthDb: LaunchInclukathonDb);
    id?: string;
    idInclukathon: InclukathonDto;
    idCompany: CompanyDto;
    idTeam: TeamDto;
}
