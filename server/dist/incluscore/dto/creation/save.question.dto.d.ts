import { QuestionsIncluscoreDb } from '../../entities/questions.entity';
declare const SaveQuestionDto_base: import("@nestjs/mapped-types").MappedType<Partial<QuestionsIncluscoreDb>>;
export declare class SaveQuestionDto extends SaveQuestionDto_base {
    id?: string;
    incluscoreThemeId: string;
}
export {};
