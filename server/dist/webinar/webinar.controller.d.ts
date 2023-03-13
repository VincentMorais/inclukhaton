import { WebinarService } from './webinar.service';
import { WebinarDto } from './dto/webinar.dto';
import { SaveWebinarDto } from './dto/save.webinar.dto';
import { UserService } from '../user/service/user.service';
import { CompanyService } from '../company/company.service';
export declare class WebinarController {
    private readonly webinarService;
    private readonly userService;
    private readonly companyService;
    constructor(webinarService: WebinarService, userService: UserService, companyService: CompanyService);
    seen(seenWebinar: any): Promise<void>;
    save(saveWebinarDto: SaveWebinarDto): Promise<WebinarDto>;
    findOneForFront(webinarId: string): Promise<WebinarDto>;
    findOne(webinarId: string): Promise<WebinarDto>;
    findAll(): Promise<WebinarDto[]>;
}
