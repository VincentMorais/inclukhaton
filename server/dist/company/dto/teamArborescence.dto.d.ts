import { TeamArborescenceDb } from '../entities/teamArborescence.entity';
export declare class TeamArborescenceDto {
    constructor(teamArborescenceDb: TeamArborescenceDb);
    id: string;
    name: string;
    level: number;
}
