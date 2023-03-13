import { DeliveriesDto } from './deliveries.dto';
import { TeamDeliveryDb } from '../team-delivery.entity';
import { NotationDeliveryDto } from './notation-delivery.dto';
export declare class TeamDeliveryDto {
    constructor(teamDeliveryDb: TeamDeliveryDb);
    _id?: string;
    id: string;
    delivery: DeliveriesDto | any;
    filesPath: string[];
    lastUpdateUnixTime: number;
    lastUploaderUserId: string;
    notation: NotationDeliveryDto[];
}
