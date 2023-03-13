import { QuestionIncluscoreService } from './question.service';
import { QuestionDto } from '../dto/question.dto';
import { ThemeIncluscoreService } from './theme.service';
import { SaveQuestionDto } from '../dto/creation/save.question.dto';
export declare class QuestionController {
    private readonly questionService;
    private readonly themeService;
    constructor(questionService: QuestionIncluscoreService, themeService: ThemeIncluscoreService);
    save(q: SaveQuestionDto): Promise<QuestionDto>;
    findOne(id: string): Promise<QuestionDto>;
    findAll(): Promise<QuestionDto[]>;
    deleteOne(idQuestion: string, idTheme: string): Promise<QuestionDto[]>;
}
