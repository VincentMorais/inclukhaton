import { ConnectDto } from './dto/connect.dto';
import { LoginService } from './login.service';
import { LoggedUserDto } from '../user/dto/logged.user.dto';
import { LaunchInclukathonService } from '../inclukathon-program/launch/launch.inclukathon.service';
import { UserService } from '../user/service/user.service';
export declare class LoginController {
    private readonly loginService;
    private readonly launchInclukathonService;
    private readonly userService;
    constructor(loginService: LoginService, launchInclukathonService: LaunchInclukathonService, userService: UserService);
    checkConnexion(userId: string, token: string, isVeryLightUserQuery: boolean): Promise<LoggedUserDto | null>;
    connect(connectDto: ConnectDto): Promise<LoggedUserDto | {
        error: boolean;
        reason: string;
    }>;
}
