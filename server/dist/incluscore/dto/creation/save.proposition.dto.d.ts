import { PropositionsIncluscoreDb } from '../../entities/propositions.entity';
declare const SavePropositionDto_base: import("@nestjs/mapped-types").MappedType<Partial<PropositionsIncluscoreDb>>;
export declare class SavePropositionDto extends SavePropositionDto_base {
    id?: string;
    incluscoreQuestionId: string;
}
export {};
