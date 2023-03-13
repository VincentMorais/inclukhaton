import { Model } from 'mongoose';
import { IncluscoreDb, IncluscoreDocument } from './entities/incluscore.entity';
import { ThemesIncluscoreDb, ThemesIncluscoreDocument } from './entities/themes.entity';
import { ThemeDto } from './dto/theme.dto';
import { QuestionDto } from './dto/question.dto';
import { PropositionDto } from './dto/proposition.dto';
import { ThemeIncluscoreService } from './theme/theme.service';
import { SaveIncluscoreDto } from './dto/creation/save.incluscore.dto';
export declare class IncluscoreService {
    private readonly incluscoreDb;
    private readonly themesDb;
    private readonly themeService;
    constructor(incluscoreDb: Model<IncluscoreDocument>, themesDb: Model<ThemesIncluscoreDocument>, themeService: ThemeIncluscoreService);
    save(update: SaveIncluscoreDto, forceCreation?: boolean): Promise<IncluscoreDb>;
    addTheme(id: string, theme: ThemesIncluscoreDb): Promise<void>;
    findOne(id: string): Promise<IncluscoreDb>;
    findAll(light?: boolean): Promise<IncluscoreDb[]>;
    findThemesByIncluscoreId(incluscoreId: string): Promise<ThemeDto[]>;
    findSpecificQuestions(incluscoreId: string, themeId: string): Promise<QuestionDto[]>;
    findSpecificPropositions(incluscoreId: string, themeId: string, questionId: string): Promise<PropositionDto[]>;
    deleteOne(id: string): Promise<void>;
    removeIdThemeFromIncluscore(id: string, idTheme: string): Promise<ThemesIncluscoreDb[]>;
}
