import { PropositionsIncluscoreDb } from '../entities/propositions.entity';
export declare class PropositionDto {
    constructor(pDb: PropositionsIncluscoreDb);
    id?: string;
    title: string;
    'title-en': string;
    'title-es': string;
    enabled: boolean;
    isAGoodAnswer: boolean;
}
