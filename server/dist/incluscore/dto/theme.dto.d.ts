import { ThemesIncluscoreDb } from '../entities/themes.entity';
import { QuestionDto } from './question.dto';
export declare class ThemeDto {
    constructor(themeDb: ThemesIncluscoreDb);
    id: string;
    name: string;
    'name-en': string;
    'name-es': string;
    enabled: boolean;
    imgPath: string;
    imgPath2: string;
    imgPath3: string;
    questions: QuestionDto[];
}
