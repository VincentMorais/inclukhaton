import { LaunchInclukathonService } from './launch.inclukathon.service';
import { SaveLaunchInclukathonDto } from '../models/dto/creation/save.launch.inclukathon.dto';
import { LaunchInclukathonDto } from '../models/dto/launch.inclukathon.dto';
import { LaunchIncluscoreService } from '../../incluscore/progression/launch.incluscore.service';
import { InclukathonProgramService } from '../inclukathon-program.service';
import { KthScrAssociationService } from '../kthScrAssociation/kth-scr-association.service';
export declare class LaunchKthController {
    private readonly launchKthService;
    private readonly launchIncluscoreService;
    private readonly inclukathonProgramService;
    private readonly kthScrAssociationService;
    constructor(launchKthService: LaunchInclukathonService, launchIncluscoreService: LaunchIncluscoreService, inclukathonProgramService: InclukathonProgramService, kthScrAssociationService: KthScrAssociationService);
    save(launch: SaveLaunchInclukathonDto): Promise<LaunchInclukathonDto[]>;
    findOne(id: string): Promise<LaunchInclukathonDto>;
    findAllByCompanyId(idCompany: string): Promise<LaunchInclukathonDto[]>;
    findAll(): Promise<LaunchInclukathonDto[]>;
    deleteOne(id: string, idCompany: string): Promise<LaunchInclukathonDto[]>;
}
