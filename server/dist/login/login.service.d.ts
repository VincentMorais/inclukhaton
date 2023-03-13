import { Model } from 'mongoose';
import { LoginDb, LoginDocument } from './entities/login.entity';
import { UserDb, UserDocument } from '../user/entity/user.entity';
import { ConnectDto } from './dto/connect.dto';
export declare class LoginService {
    private readonly userDb;
    private readonly loginDb;
    constructor(userDb: Model<UserDocument>, loginDb: Model<LoginDocument>);
    static readonly SALT = 10;
    checkConnexion(userId: string, token: string): Promise<boolean>;
    getAuthenticatedUser(connectDto: ConnectDto, saveNewPwd?: boolean): Promise<UserDb | {
        error: boolean;
        reason: string;
    }>;
    connect(connectDto: ConnectDto): Promise<LoginDb | {
        error: boolean;
        reason: string;
    }>;
    deleteTokenOfUser(idUser: string): Promise<void>;
}
