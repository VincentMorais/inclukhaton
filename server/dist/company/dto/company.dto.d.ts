import { CompanyDb } from '../entities/company.entity';
import { UserDto } from '../../user/dto/user.dto';
import { TeamDto } from '../../team/dto/team.dto';
import { TeamArborescenceDto } from './teamArborescence.dto';
import { AvailableRegionDto } from './availableRegion.dto';
export declare class CompanyDto {
    constructor(companyDb: CompanyDb);
    _id?: string;
    id: string;
    name: string;
    imgPath: string;
    users: UserDto[];
    teams: TeamDto[];
    teamArborescence: TeamArborescenceDto[];
    availableRegions: AvailableRegionDto[];
    displayRegions: boolean;
}
