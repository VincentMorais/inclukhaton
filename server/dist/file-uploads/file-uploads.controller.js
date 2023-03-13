"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var FileUploadsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadsController = void 0;
const common_1 = require("@nestjs/common");
const file_uploads_service_1 = require("./file-uploads.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const user_service_1 = require("../user/service/user.service");
const company_service_1 = require("../company/company.service");
const theme_service_1 = require("../incluscore/theme/theme.service");
const routes_helper_1 = require("../provider/routes.helper");
const fs = require("fs");
const webinar_service_1 = require("../webinar/webinar.service");
let FileUploadsController = FileUploadsController_1 = class FileUploadsController {
    constructor(fileUploadsService, userService, companyService, themeService, webinarService) {
        this.fileUploadsService = fileUploadsService;
        this.userService = userService;
        this.companyService = companyService;
        this.themeService = themeService;
        this.webinarService = webinarService;
    }
    async uploadUserAvatar(file, body) {
        const { idUser } = body;
        const specificFilePath = FileUploadsController_1.getUserIdDirectoryPath(idUser);
        const dbFilePath = specificFilePath + file.originalname;
        const user = await this.userService.findOne(idUser);
        const oldPath = user.avatarImgPath;
        user.avatarImgPath = dbFilePath;
        await this.userService.save(user);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.USER_AVATAR_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.USER_AVATAR_PATH + oldPath);
        }
    }
    async uploadWebinarVideo(file, body) {
        const { idWebinar } = body;
        const specificFilePath = FileUploadsController_1.getWebinarIdDirectoryPath(idWebinar);
        const dbFilePath = specificFilePath + file.originalname;
        const webinarDb = await this.webinarService.findOne(idWebinar);
        const oldPath = webinarDb.path;
        webinarDb.path = dbFilePath;
        await this.webinarService.save(webinarDb);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.WEBINAR_VIDEO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.WEBINAR_VIDEO_PATH + oldPath);
        }
    }
    async seeWebinarVideo(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.WEBINAR_VIDEO_PATH,
        });
    }
    async uploadUserPresentationVideo(file, body) {
        const { idUser } = body;
        const specificFilePath = FileUploadsController_1.getUserIdDirectoryPath(idUser);
        const dbFilePath = specificFilePath + file.originalname;
        const user = await this.userService.findOne(idUser);
        const oldPath = user.presentationVideoPath;
        user.presentationVideoPath = dbFilePath;
        await this.userService.save(user);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.USER_PRESENTATION_VIDEO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.USER_PRESENTATION_VIDEO_PATH + oldPath);
        }
    }
    async seeUserAvatar(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.USER_AVATAR_PATH,
        });
    }
    async seeUserPresentationVideo(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.USER_PRESENTATION_VIDEO_PATH,
        });
    }
    async uploadCompanyLogo(file, body) {
        const { idCompany } = body;
        const specificFilePath = FileUploadsController_1.getCompanyDirectoryPath(idCompany);
        const dbFilePath = specificFilePath + file.originalname;
        const company = await this.companyService.findOne(idCompany);
        const oldPath = company.imgPath;
        company.imgPath = dbFilePath;
        await this.companyService.save(company);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.COMPANY_LOGO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.COMPANY_LOGO_PATH + oldPath);
        }
    }
    async seeCompanyLogo(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.COMPANY_LOGO_PATH,
        });
    }
    async uploadThemeLogo1(file, body) {
        const { idTheme } = body;
        const specificFilePath = FileUploadsController_1.getThemeDirectoryPath(idTheme);
        const dbFilePath = specificFilePath + file.originalname;
        const theme = await this.themeService.findOne(idTheme);
        const oldPath = theme.imgPath;
        theme.imgPath = dbFilePath;
        await this.themeService.save(theme);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        }
    }
    async seeThemeLogo1(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.THEMES_LOGO_PATH,
        });
    }
    async uploadThemeLogo2(file, body) {
        const { idTheme } = body;
        const specificFilePath = FileUploadsController_1.getThemeDirectoryPath(idTheme);
        const dbFilePath = specificFilePath + file.originalname;
        const theme = await this.themeService.findOne(idTheme);
        const oldPath = theme.imgPath2;
        theme.imgPath2 = dbFilePath;
        await this.themeService.save(theme);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        }
    }
    async seeThemeLogo2(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.THEMES_LOGO_PATH,
        });
    }
    async uploadThemeLogo3(file, body) {
        const { idTheme } = body;
        const specificFilePath = FileUploadsController_1.getThemeDirectoryPath(idTheme);
        const dbFilePath = specificFilePath + file.originalname;
        const theme = await this.themeService.findOne(idTheme);
        const oldPath = theme.imgPath3;
        theme.imgPath3 = dbFilePath;
        await this.themeService.save(theme);
        const hasToBeRemoved = fs.existsSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(FileUploadsController_1.THEMES_LOGO_PATH + oldPath);
        }
    }
    async seeThemeLogo3(load, res) {
        return res.sendFile(load, {
            root: FileUploadsController_1.THEMES_LOGO_PATH,
        });
    }
};
FileUploadsController.USER_AVATAR_PATH = './../uploaded_files/users-avatar/';
FileUploadsController.USER_PRESENTATION_VIDEO_PATH = './../uploaded_files/users-presentation-video/';
FileUploadsController.COMPANY_LOGO_PATH = './../uploaded_files/company-logo/';
FileUploadsController.THEMES_LOGO_PATH = './../uploaded_files/themes-logo/';
FileUploadsController.WEBINAR_VIDEO_PATH = './../uploaded_files/webinar-video/';
FileUploadsController.getUserIdDirectoryPath = (idUser) => `user-${idUser}/`;
FileUploadsController.getCompanyDirectoryPath = (idCompany) => `company-${idCompany}/`;
FileUploadsController.getThemeDirectoryPath = (idTheme) => `theme-${idTheme}/`;
FileUploadsController.getWebinarIdDirectoryPath = (id) => `webinar-${id}/`;
__decorate([
    (0, common_1.Post)(routes_helper_1.USER_AVATAR_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idUser } = r.body;
                const storageFilePath = FileUploadsController_1.USER_AVATAR_PATH + FileUploadsController_1.getUserIdDirectoryPath(idUser);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadUserAvatar", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.WEBINAR_VIDEO_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idWebinar } = r.body;
                const storageFilePath = FileUploadsController_1.WEBINAR_VIDEO_PATH +
                    FileUploadsController_1.getWebinarIdDirectoryPath(idWebinar);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadWebinarVideo", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.WEBINAR_VIDEO_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeWebinarVideo", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.USER_PRESENTATION_VIDEO_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idUser } = r.body;
                const storageFilePath = FileUploadsController_1.USER_PRESENTATION_VIDEO_PATH +
                    FileUploadsController_1.getUserIdDirectoryPath(idUser);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadUserPresentationVideo", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.USER_AVATAR_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeUserAvatar", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.USER_PRESENTATION_VIDEO_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeUserPresentationVideo", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.COMPANY_LOGO_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idCompany } = r.body;
                const storageFilePath = FileUploadsController_1.COMPANY_LOGO_PATH +
                    FileUploadsController_1.getCompanyDirectoryPath(idCompany);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadCompanyLogo", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.COMPANY_LOGO_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeCompanyLogo", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.THEME_LOGO_ENDPOINT + '1'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idTheme } = r.body;
                const storageFilePath = FileUploadsController_1.THEMES_LOGO_PATH + FileUploadsController_1.getThemeDirectoryPath(idTheme);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadThemeLogo1", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.THEME_LOGO_ENDPOINT + '1'),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeThemeLogo1", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.THEME_LOGO_ENDPOINT + '2'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idTheme } = r.body;
                const storageFilePath = FileUploadsController_1.THEMES_LOGO_PATH + FileUploadsController_1.getThemeDirectoryPath(idTheme);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadThemeLogo2", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.THEME_LOGO_ENDPOINT + '2'),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeThemeLogo2", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.THEME_LOGO_ENDPOINT + '3'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idTheme } = r.body;
                const storageFilePath = FileUploadsController_1.THEMES_LOGO_PATH + FileUploadsController_1.getThemeDirectoryPath(idTheme);
                fs.mkdirSync(storageFilePath, { recursive: true });
                cb(null, storageFilePath);
            },
            filename(r, f, cb) {
                cb(null, f.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadThemeLogo3", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.THEME_LOGO_ENDPOINT + '3'),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "seeThemeLogo3", null);
FileUploadsController = FileUploadsController_1 = __decorate([
    (0, common_1.Controller)(routes_helper_1.FILE_UPLOADS_CTRL),
    __metadata("design:paramtypes", [file_uploads_service_1.FileUploadsService,
        user_service_1.UserService,
        company_service_1.CompanyService,
        theme_service_1.ThemeIncluscoreService,
        webinar_service_1.WebinarService])
], FileUploadsController);
exports.FileUploadsController = FileUploadsController;
//# sourceMappingURL=file-uploads.controller.js.map