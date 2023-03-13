import { KthScrAssociationDb } from '../kth-scr-association.entity';
import { IncluscoreDto } from '../../../incluscore/dto/incluscore.dto';
import { LaunchIncluscoreDto } from '../../../incluscore/dto/launch.incluscore.dto';
import { DateTime } from 'luxon';
export declare class KthScrAssociationDto {
    constructor(kthScrAssociationDb: KthScrAssociationDb);
    _id?: string;
    id: string;
    incluscore: IncluscoreDto | any;
    launchIncluscore?: LaunchIncluscoreDto | any;
    locked: boolean;
    startDate: DateTime;
    endDate: DateTime;
    isInProgress?: boolean;
    durationUntilEnd?: string;
    durationUntilStart?: string;
}
