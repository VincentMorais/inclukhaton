import { InclukathonProgramDb } from '../inclukathon-program.entity';
import { BaiDto } from './bai.dto';
import { KthScrAssociationDto } from './kth-scr-association.dto';
import { DeliveriesDto } from './deliveries.dto';
import { DateTime } from 'luxon';
export declare class InclukathonDto {
    constructor(inclukathonDb: InclukathonProgramDb);
    _id?: string;
    id: string;
    name: string;
    explanation: string;
    bannerImgPath: string;
    programImgPath: string;
    startDate: DateTime;
    endDate: DateTime;
    subject: string;
    bai: BaiDto[];
    kthScrAssociation: KthScrAssociationDto[];
    deliveries: DeliveriesDto[];
    inProgress?: boolean;
    notStarted?: boolean;
}
