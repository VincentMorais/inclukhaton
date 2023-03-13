import { Model } from 'mongoose';
import { TeamDb, TeamDocument } from './entities/team.entity';
import { SaveTeamDto } from './dto/save.team.dto';
import { SaveNotationDeliveryDto } from '../inclukathon-program/models/dto/creation/save.notation-delivery.dto';
import { TeamDeliveryDb, TeamDeliveryDocument } from '../inclukathon-program/models/team-delivery.entity';
import { TeamArborescenceDb, TeamArborescenceDocument } from '../company/entities/teamArborescence.entity';
import { SaveTeamArborescenceDto } from '../company/dto/saveTeamArborescence.dto';
export declare class TeamService {
    private readonly teamDb;
    private readonly teamArborescenceDb;
    constructor(teamDb: Model<TeamDocument>, teamArborescenceDb: Model<TeamArborescenceDocument>);
    save(saveTeamDto: SaveTeamDto): Promise<TeamDb>;
    saveArborescence(saveTeamArborescenceDto: SaveTeamArborescenceDto): Promise<TeamArborescenceDb>;
    saveNotationForTeamDelivery(saveNotationDto: SaveNotationDeliveryDto, teamDeliveryDb: TeamDeliveryDb): Promise<TeamDeliveryDocument>;
    populateTeamsFields(teams: TeamDb[]): Promise<TeamDb[]>;
    findOne(id: string): Promise<TeamDb>;
    findOneArborescence(id: string): Promise<TeamArborescenceDb>;
    findAll(): Promise<TeamDb[]>;
    findAllArborescence(): Promise<TeamArborescenceDb[]>;
    findByIds(ids: string[]): Promise<TeamDb[]>;
    deleteOne(id: string): Promise<void>;
    deleteOneArborescence(id: string): Promise<void>;
}
