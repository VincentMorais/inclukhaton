import { IncluscoreService } from './incluscore.service';
import { IncluscoreDto } from './dto/incluscore.dto';
import { ThemeDto } from './dto/theme.dto';
import { QuestionDto } from './dto/question.dto';
import { PropositionDto } from './dto/proposition.dto';
import { SaveIncluscoreDto } from './dto/creation/save.incluscore.dto';
import { PropositionIncluscoreService } from './theme/proposition.service';
import { QuestionIncluscoreService } from './theme/question.service';
import { ThemeIncluscoreService } from './theme/theme.service';
export declare class IncluscoreController {
    private readonly incluscoreService;
    private readonly themeService;
    private readonly questionService;
    private readonly propositionService;
    constructor(incluscoreService: IncluscoreService, themeService: ThemeIncluscoreService, questionService: QuestionIncluscoreService, propositionService: PropositionIncluscoreService);
    copyThisIncluscore(idIncluscore: string): Promise<IncluscoreDto>;
    save(incluscore: SaveIncluscoreDto): Promise<IncluscoreDto>;
    findAllForCompanyAssociation(): Promise<IncluscoreDto[]>;
    findOne(idIncluscore: string): Promise<IncluscoreDto>;
    findAll(): Promise<IncluscoreDto[]>;
    findSpecificThemes(idIncluscore: string): Promise<ThemeDto[]>;
    findSpecificQuestions(idIncluscore: string, idTheme: string): Promise<QuestionDto[]>;
    findSpecificPropositions(idIncluscore: string, idTheme: string, idQuestion: string): Promise<PropositionDto[]>;
    deleteOne(idIncluscore: string): Promise<IncluscoreDto[]>;
}
