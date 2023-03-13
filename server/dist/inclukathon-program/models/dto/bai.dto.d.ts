import { BaiDb } from '../bai.entity';
export declare class BaiDto {
    constructor(baiDb: BaiDb);
    _id?: string;
    id: string;
    rubrique: string;
    name: string;
    imgCoverPath: string;
    filesPath: string[];
}
