/// <reference types="multer" />
import { InclukathonProgramService } from '../../inclukathon-program/inclukathon-program.service';
export declare class AdminKthFileUploadsController {
    private readonly inclukathonProgramService;
    constructor(inclukathonProgramService: InclukathonProgramService);
    private static readonly KTH_BANNER_PATH;
    private static readonly KTH_PROGRAM_IMG_PATH;
    static getKthIdDirectoryPath: (idKth: string) => string;
    uploadBanner(file: Express.Multer.File, body: any): Promise<void>;
    seeBanner(load: any, res: any): Promise<any>;
    uploadProgramImg(file: Express.Multer.File, body: any): Promise<void>;
    seeProgramImg(load: any, res: any): Promise<any>;
}
