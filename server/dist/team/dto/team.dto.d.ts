import { TeamDb } from '../entities/team.entity';
import { TeamDeliveryDto } from '../../inclukathon-program/models/dto/team-delivery.dto';
import { TeamArborescenceDto } from '../../company/dto/teamArborescence.dto';
export declare class TeamDto {
    constructor(teamDb?: TeamDb);
    id: string;
    name: string;
    enabled: boolean;
    teamDelivery?: TeamDeliveryDto[];
    projectDescription: string;
    level1: TeamArborescenceDto;
    level2: TeamArborescenceDto;
    level3: TeamArborescenceDto;
    arborescence: string;
}
