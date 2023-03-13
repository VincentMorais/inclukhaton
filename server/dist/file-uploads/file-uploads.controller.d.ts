/// <reference types="multer" />
import { FileUploadsService } from './file-uploads.service';
import { UserService } from '../user/service/user.service';
import { CompanyService } from '../company/company.service';
import { ThemeIncluscoreService } from '../incluscore/theme/theme.service';
import { WebinarService } from '../webinar/webinar.service';
export declare class FileUploadsController {
    private readonly fileUploadsService;
    private readonly userService;
    private readonly companyService;
    private readonly themeService;
    private readonly webinarService;
    constructor(fileUploadsService: FileUploadsService, userService: UserService, companyService: CompanyService, themeService: ThemeIncluscoreService, webinarService: WebinarService);
    private static readonly USER_AVATAR_PATH;
    private static readonly USER_PRESENTATION_VIDEO_PATH;
    private static readonly COMPANY_LOGO_PATH;
    private static readonly THEMES_LOGO_PATH;
    private static readonly WEBINAR_VIDEO_PATH;
    static getUserIdDirectoryPath: (idUser: string) => string;
    static getCompanyDirectoryPath: (idCompany: string) => string;
    static getThemeDirectoryPath: (idTheme: string) => string;
    static getWebinarIdDirectoryPath: (id: string) => string;
    uploadUserAvatar(file: Express.Multer.File, body: any): Promise<void>;
    uploadWebinarVideo(file: Express.Multer.File, body: any): Promise<void>;
    seeWebinarVideo(load: any, res: any): Promise<any>;
    uploadUserPresentationVideo(file: Express.Multer.File, body: any): Promise<void>;
    seeUserAvatar(load: any, res: any): Promise<any>;
    seeUserPresentationVideo(load: any, res: any): Promise<any>;
    uploadCompanyLogo(file: Express.Multer.File, body: any): Promise<void>;
    seeCompanyLogo(load: any, res: any): Promise<any>;
    uploadThemeLogo1(file: Express.Multer.File, body: any): Promise<void>;
    seeThemeLogo1(load: any, res: any): Promise<any>;
    uploadThemeLogo2(file: Express.Multer.File, body: any): Promise<void>;
    seeThemeLogo2(load: any, res: any): Promise<any>;
    uploadThemeLogo3(file: Express.Multer.File, body: any): Promise<void>;
    seeThemeLogo3(load: any, res: any): Promise<any>;
}
