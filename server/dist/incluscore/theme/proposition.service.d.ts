import { Model } from 'mongoose';
import { PropositionsIncluscoreDb, PropositionsIncluscoreDocument } from '../entities/propositions.entity';
import { SavePropositionDto } from '../dto/creation/save.proposition.dto';
export declare class PropositionIncluscoreService {
    private readonly propositionsDb;
    constructor(propositionsDb: Model<PropositionsIncluscoreDocument>);
    save(update: SavePropositionDto, forceCreation?: boolean): Promise<PropositionsIncluscoreDb>;
    findOne(id: string): Promise<PropositionsIncluscoreDb>;
    findBy(_champs: string, value: any): Promise<number>;
    find(): Promise<PropositionsIncluscoreDb[]>;
    countAll(): Promise<number>;
}
