import { PropositionIncluscoreService } from 'src/incluscore/theme/proposition.service';
export declare class StatsController {
    private readonly propositionService;
    constructor(propositionService: PropositionIncluscoreService);
    get_pourcentage(): Promise<number[]>;
}
