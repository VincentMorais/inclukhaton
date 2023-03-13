import { UserThemeIncluscoreDb } from '../../entities/userTheme.entity';
import { UserAnswerIncluscoreDb } from '../../entities/userAnswer.entity';
declare const SaveUserAnswerDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserAnswerIncluscoreDb>>;
export declare class SaveUserAnswerDto extends SaveUserAnswerDto_base {
    _id?: string;
    id?: string;
}
declare const SaveUserThemeDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserThemeIncluscoreDb>>;
export declare class SaveUserThemeDto extends SaveUserThemeDto_base {
    _id?: string;
    id?: string;
    answer: SaveUserAnswerDto;
}
export {};
