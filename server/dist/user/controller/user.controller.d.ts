import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { SaveUserDto } from '../dto/save.user.dto';
import { CompanyService } from '../../company/company.service';
import { LoginService } from '../../login/login.service';
import { LoggedUserDto } from '../dto/logged.user.dto';
import { ILang } from '../../translations/LangUtils';
export declare class UserController {
    private readonly userService;
    private readonly companyService;
    private readonly loginService;
    constructor(userService: UserService, companyService: CompanyService, loginService: LoginService);
    save(saveUserDto: SaveUserDto): Promise<LoggedUserDto | {
        error: boolean;
        reason: string;
    }>;
    setLang(userId: string, lang: ILang): Promise<void>;
    addJury(userId: string, teamId: string): Promise<import("../entity/user.entity").UserDb>;
    addManager(userId: string, teamId: string): Promise<import("../entity/user.entity").UserDb>;
    migrateTeams(): Promise<void>;
    hasAChosenPassword(email: string): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    deleteAndCleanRefs(id: string): Promise<UserDto[]>;
    removeJury(userId: string, teamId: string): Promise<import("../entity/user.entity").UserDb>;
    removeManager(userId: string, teamId: string): Promise<import("../entity/user.entity").UserDb>;
    updateNps(userId: string, notation: number, comment: string, step: number): Promise<void>;
    findOne(id: string): Promise<UserDto>;
}
