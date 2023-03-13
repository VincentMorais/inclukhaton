/// <reference types="multer" />
import { BaiKthService } from '../../inclukathon-program/bai/bai-kth.service';
export declare class AdminBaiFileUploadsController {
    private readonly baiKthService;
    constructor(baiKthService: BaiKthService);
    private static readonly BAI_COVER_PATH;
    private static readonly BAI_FILES_PATH;
    static getBaiIdDirectoryPath: (idBai: string) => string;
    uploadBanner(file: Express.Multer.File, body: any): Promise<void>;
    seeBanner(load: any, res: any): Promise<any>;
    uploadSingleBai(file: Express.Multer.File, body: any): Promise<void>;
    seeOneBaiFile(load: any, res: any): Promise<any>;
    deleteOneBaiFile(body: any): Promise<void>;
}
