import { Model } from 'mongoose';
import { ThemesIncluscoreDb, ThemesIncluscoreDocument } from '../entities/themes.entity';
import { ThemeDto } from '../dto/theme.dto';
import { QuestionsIncluscoreDb } from '../entities/questions.entity';
import { QuestionIncluscoreService } from './question.service';
import { SaveThemeDto } from '../dto/creation/save.theme.dto';
export declare class ThemeIncluscoreService {
    private readonly themesDb;
    private readonly questionService;
    constructor(themesDb: Model<ThemesIncluscoreDocument>, questionService: QuestionIncluscoreService);
    save(update: SaveThemeDto, forceCreation?: boolean): Promise<ThemesIncluscoreDb>;
    addQuestion(idTheme: string, question: QuestionsIncluscoreDb): Promise<void>;
    getNbQuestions(idTheme: string): Promise<number>;
    findOne(id: string, selectOnly?: {}): Promise<ThemesIncluscoreDb>;
    find(): Promise<ThemeDto[]>;
    removeIdQuestionFromTheme(id: string, idQuestion: string): Promise<QuestionsIncluscoreDb[]>;
    deleteOne(id: string): Promise<void>;
}
