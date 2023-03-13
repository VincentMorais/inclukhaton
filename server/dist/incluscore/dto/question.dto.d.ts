import { QuestionsIncluscoreDb } from '../entities/questions.entity';
import { PropositionDto } from './proposition.dto';
export declare class QuestionDto {
    constructor(qDb: QuestionsIncluscoreDb);
    id: string;
    title: string;
    'title-en': string;
    'title-es': string;
    enabled: boolean;
    answerExplanation: string;
    'answerExplanation-en': string;
    'answerExplanation-es': string;
    propositions: PropositionDto[];
}
