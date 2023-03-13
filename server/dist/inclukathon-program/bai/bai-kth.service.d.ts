import { Model } from 'mongoose';
import { BaiDb, BaiDocument } from '../models/bai.entity';
import { SaveBaiDto } from '../models/dto/creation/save.bai.dto';
export declare class BaiKthService {
    private readonly baiDb;
    constructor(baiDb: Model<BaiDocument>);
    save(update: SaveBaiDto): Promise<BaiDb>;
    findOne(id: string): Promise<BaiDb>;
    findAll(): Promise<BaiDb[]>;
    deleteOne(id: string): Promise<void>;
}
