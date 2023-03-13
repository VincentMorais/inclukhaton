import { Model } from 'mongoose';
import { QuestionsIncluscoreDb, QuestionsIncluscoreDocument } from '../entities/questions.entity';
import { PropositionsIncluscoreDb, PropositionsIncluscoreDocument } from '../entities/propositions.entity';
import { SaveQuestionDto } from '../dto/creation/save.question.dto';
export declare class QuestionIncluscoreService {
    private readonly questionsDb;
    private readonly propositionsDb;
    constructor(questionsDb: Model<QuestionsIncluscoreDocument>, propositionsDb: Model<PropositionsIncluscoreDocument>);
    save(update: SaveQuestionDto, forceCreation?: boolean): Promise<QuestionsIncluscoreDb>;
    addProposition(idQuestion: string, proposition: PropositionsIncluscoreDb): Promise<void>;
    findOne(idQuestion: string): Promise<QuestionsIncluscoreDb>;
    find(): Promise<QuestionsIncluscoreDb[]>;
    deleteOne(id: string): Promise<void>;
}
