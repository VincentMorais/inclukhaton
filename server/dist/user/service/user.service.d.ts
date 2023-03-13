import { UserDb, UserDocument } from '../entity/user.entity';
import { Model } from 'mongoose';
import { CompanyDocument } from '../../company/entities/company.entity';
import { TeamDocument } from '../../team/entities/team.entity';
import { CompanyService } from '../../company/company.service';
import { UserThemeService } from '../../incluscore/progression/userTheme.service';
import { LoginService } from '../../login/login.service';
import { SaveUserDto } from '../dto/save.user.dto';
import { UserDto } from '../dto/user.dto';
import { ILang } from '../../translations/LangUtils';
import { WebinarService } from '../../webinar/webinar.service';
export declare class UserService {
    private readonly userDb;
    private readonly companyDb;
    private readonly teamDb;
    private readonly companyService;
    private readonly userThemeService;
    private readonly loginService;
    private readonly webinarService;
    constructor(userDb: Model<UserDocument>, companyDb: Model<CompanyDocument>, teamDb: Model<TeamDocument>, companyService: CompanyService, userThemeService: UserThemeService, loginService: LoginService, webinarService: WebinarService);
    readonly populateTeamDelivery: {
        path: string;
        populate: (string | {
            path: string;
            populate: string;
        })[];
    };
    save(saveUserDto: SaveUserDto): Promise<UserDb>;
    removeTeamForAllUsers(idTeam: string): Promise<void>;
    findOne(id: string, isVeryLightUserQuery?: boolean): Promise<UserDb>;
    setLang(userId: string, lang: ILang): Promise<void>;
    findByEmail(email: string): Promise<UserDb>;
    findAll(): Promise<UserDb[]>;
    getTeamsToManage(user: UserDto): Promise<any>;
    delete(id: string): Promise<void>;
    deleteAndCleanRefs(id: string): Promise<UserDb[]>;
    updateNpsNotation(userId: string, notation: number): Promise<void>;
    updateNpsComment(userId: string, comment: string): Promise<void>;
    teamsIdsToTeam(): Promise<void>;
    saveWebinarSeen(idWebinar: string, idUser: string): Promise<void>;
}
