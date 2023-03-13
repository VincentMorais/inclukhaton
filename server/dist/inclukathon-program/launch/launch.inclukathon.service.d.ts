import { Model } from 'mongoose';
import { LaunchInclukathonDb, LaunchInclukathonDocument } from '../models/launch.inclukathon.entity';
import { SaveLaunchInclukathonDto } from '../models/dto/creation/save.launch.inclukathon.dto';
import { UserDto } from '../../user/dto/user.dto';
import { InclukathonDto } from '../models/dto/inclukathon.dto';
export declare class LaunchInclukathonService {
    private readonly launchKthDb;
    constructor(launchKthDb: Model<LaunchInclukathonDocument>);
    retrieveLastInProgressInclukathon(user: UserDto): Promise<InclukathonDto | null>;
    save(update: SaveLaunchInclukathonDto): Promise<LaunchInclukathonDb>;
    findOne(id: string): Promise<LaunchInclukathonDb>;
    findAllByCompanyId(idCompany: string, light?: boolean): Promise<LaunchInclukathonDb[]>;
    findAll(): Promise<LaunchInclukathonDb[]>;
    removeTeamLaunches(idTeam: string): Promise<void>;
    deleteOne(id: string, idCompany: string): Promise<LaunchInclukathonDb[]>;
}
