import { PropositionIncluscoreService } from './proposition.service';
import { PropositionDto } from '../dto/proposition.dto';
import { QuestionIncluscoreService } from './question.service';
import { SavePropositionDto } from '../dto/creation/save.proposition.dto';
export declare class PropositionController {
    private readonly propositionService;
    private readonly questionService;
    constructor(propositionService: PropositionIncluscoreService, questionService: QuestionIncluscoreService);
    save(p: SavePropositionDto): Promise<PropositionDto>;
    findOne(id: string): Promise<PropositionDto>;
    findAll(): Promise<PropositionDto[]>;
}
