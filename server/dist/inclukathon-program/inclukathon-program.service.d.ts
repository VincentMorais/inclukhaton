import { Model } from 'mongoose';
import { InclukathonProgramDb, InclukathonProgramDocument } from './models/inclukathon-program.entity';
import { KthScrAssociationDb, KthScrAssociationDocument } from './models/kth-scr-association.entity';
import { DeliveriesDb, DeliveriesDocument } from './models/deliveries.entity';
import { SaveInclukathonDto } from './models/dto/creation/save.inclukathon.dto';
import { BaiKthService } from './bai/bai-kth.service';
import { BaiDb } from './models/bai.entity';
export declare class InclukathonProgramService {
    private readonly inclukathonDb;
    private readonly kthScrAssociationDb;
    private readonly deliveriesDb;
    private readonly baiKthService;
    constructor(inclukathonDb: Model<InclukathonProgramDocument>, kthScrAssociationDb: Model<KthScrAssociationDocument>, deliveriesDb: Model<DeliveriesDocument>, baiKthService: BaiKthService);
    save(update: SaveInclukathonDto): Promise<InclukathonProgramDb>;
    saveBaiToKth(id: string, bai: BaiDb): Promise<InclukathonProgramDocument>;
    saveDeliveryToKth(id: string, delivery: DeliveriesDb): Promise<InclukathonProgramDocument>;
    saveKthScrAssociationToKth(id: string, kthScrAssociation: KthScrAssociationDb): Promise<InclukathonProgramDocument>;
    findOne(id: string): Promise<InclukathonProgramDb>;
    findAll(light?: boolean): Promise<InclukathonProgramDb[]>;
    deleteOne(id: string): Promise<void>;
}
