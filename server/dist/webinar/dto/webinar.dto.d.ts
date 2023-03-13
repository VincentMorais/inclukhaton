import { WebinarDb } from '../entities/webinar.entity';
import { DateTime } from 'luxon';
import { CompanyDto } from '../../company/dto/company.dto';
export declare class WebinarDto {
    constructor(webinarDb: WebinarDb);
    _id?: string;
    id: string;
    title: string;
    'title-en': string;
    'title-es': string;
    description: string;
    'description-en': string;
    'description-es': string;
    score: number;
    path: string;
    enabled: boolean;
    startDate: DateTime;
    endDate: DateTime;
    formattedStartDate?: string;
    formattedEndDate?: string;
    isInProgress?: boolean;
    durationUntilEnd?: string;
    durationUntilStart?: string;
    company: CompanyDto;
}
