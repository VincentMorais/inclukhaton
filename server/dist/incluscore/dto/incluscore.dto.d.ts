import { IncluscoreDb } from '../entities/incluscore.entity';
import { ThemeDto } from './theme.dto';
export declare class IncluscoreDto {
    constructor(incluscoreDb: IncluscoreDb);
    _id?: string;
    id: string;
    name: string;
    'name-en': string;
    'name-es': string;
    smallName: string;
    'smallName-en': string;
    'smallName-es': string;
    enabled: boolean;
    canBePublic: boolean;
    description: string;
    'description-en': string;
    'description-es': string;
    themes: ThemeDto[];
    isInclucard: boolean;
    inclucardColor: string;
    incluscoreColor: string;
    secondIncluscoreColor: string;
    displayNewStudentNumber?: boolean;
    companyImgPath?: string;
}
