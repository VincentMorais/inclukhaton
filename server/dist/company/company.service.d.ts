import { CompanyDb, CompanyDocument } from './entities/company.entity';
import { Model } from 'mongoose';
import { UserDb, UserDocument } from '../user/entity/user.entity';
import { TeamDb } from '../team/entities/team.entity';
import { SaveCompanyDto } from './dto/save.company.dto';
import { TeamArborescenceDb } from './entities/teamArborescence.entity';
import { AvailableRegionDb, AvailableRegionDocument } from './entities/availableRegion.entity';
import { SaveAvailableRegionDto } from './dto/saveAvailableRegion.dto';
export declare class CompanyService {
    private readonly companyDb;
    private readonly userDb;
    private readonly teamDb;
    private readonly availableRegionDb;
    constructor(companyDb: Model<CompanyDocument>, userDb: Model<UserDocument>, teamDb: Model<UserDocument>, availableRegionDb: Model<AvailableRegionDocument>);
    save(saveCompanyDto: SaveCompanyDto): Promise<CompanyDb>;
    addUser(id: string, user: UserDb): Promise<CompanyDb>;
    addTeam(id: string, team: TeamDb): Promise<CompanyDb>;
    addTeamArborescence(id: string, teamArborescence: TeamArborescenceDb): Promise<CompanyDb>;
    findAllArborescenceForTeamForm(idCompany: string): Promise<any>;
    addAvailableRegion(id: string, availableRegion: AvailableRegionDb): Promise<CompanyDb>;
    saveAvailableRegion(newRegion: SaveAvailableRegionDto): Promise<AvailableRegionDb>;
    deleteOneAvailableRegion(id: string): Promise<void>;
    updateAvailableRegionList(id: string, idAvailableRegion: string): Promise<any>;
    findOne(companyId: string): Promise<CompanyDb>;
    findAll(light?: true): Promise<CompanyDb[]>;
    updateUserList(companyId: string, userId: string): Promise<UserDb[]>;
    updateTeamList(id: string, idTeam: string): Promise<any>;
    updateTeamArborescenceList(id: string, idTeamArborescence: string): Promise<any>;
}
