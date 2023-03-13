import { Model } from 'mongoose';
import { KthScrAssociationDb, KthScrAssociationDocument } from '../models/kth-scr-association.entity';
import { SaveKthScrAssociationDto } from '../models/dto/creation/save.kth-scr-association';
export declare class KthScrAssociationService {
    private readonly kthScrDb;
    constructor(kthScrDb: Model<KthScrAssociationDocument>);
    save(update: SaveKthScrAssociationDto): Promise<KthScrAssociationDb>;
    findOne(id: string): Promise<KthScrAssociationDb>;
    findAll(): Promise<KthScrAssociationDb[]>;
    deleteOne(id: string): Promise<void>;
}
