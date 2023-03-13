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
var AdminKthFileUploadsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminKthFileUploadsController = void 0;
const routes_helper_1 = require("../../provider/routes.helper");
const common_1 = require("@nestjs/common");
const inclukathon_program_service_1 = require("../../inclukathon-program/inclukathon-program.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs = require("fs");
let AdminKthFileUploadsController = AdminKthFileUploadsController_1 = class AdminKthFileUploadsController {
    constructor(inclukathonProgramService) {
        this.inclukathonProgramService = inclukathonProgramService;
    }
    async uploadBanner(file, body) {
        const { idKth } = body;
        const specificFilePath = AdminKthFileUploadsController_1.getKthIdDirectoryPath(idKth);
        const dbFilePath = specificFilePath + file.originalname;
        const inclukathonProgramDb = await this.inclukathonProgramService.findOne(idKth);
        const oldPath = inclukathonProgramDb.bannerImgPath;
        inclukathonProgramDb.bannerImgPath = dbFilePath;
        await this.inclukathonProgramService.save(inclukathonProgramDb);
        const hasToBeRemoved = fs.existsSync(AdminKthFileUploadsController_1.KTH_BANNER_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(AdminKthFileUploadsController_1.KTH_BANNER_PATH + oldPath);
        }
    }
    async seeBanner(load, res) {
        return res.sendFile(load, {
            root: AdminKthFileUploadsController_1.KTH_BANNER_PATH,
        });
    }
    async uploadProgramImg(file, body) {
        const { idKth } = body;
        const specificFilePath = AdminKthFileUploadsController_1.getKthIdDirectoryPath(idKth);
        const dbFilePath = specificFilePath + file.originalname;
        const inclukathonProgramDb = await this.inclukathonProgramService.findOne(idKth);
        const oldPath = inclukathonProgramDb.programImgPath;
        inclukathonProgramDb.programImgPath = dbFilePath;
        await this.inclukathonProgramService.save(inclukathonProgramDb);
        const hasToBeRemoved = fs.existsSync(AdminKthFileUploadsController_1.KTH_PROGRAM_IMG_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(AdminKthFileUploadsController_1.KTH_PROGRAM_IMG_PATH + oldPath);
        }
    }
    async seeProgramImg(load, res) {
        return res.sendFile(load, {
            root: AdminKthFileUploadsController_1.KTH_PROGRAM_IMG_PATH,
        });
    }
};
AdminKthFileUploadsController.KTH_BANNER_PATH = './../uploaded_files/inclukathon-banner/';
AdminKthFileUploadsController.KTH_PROGRAM_IMG_PATH = './../uploaded_files/inclukathon-program-img/';
AdminKthFileUploadsController.getKthIdDirectoryPath = (idKth) => `kth-${idKth}/`;
__decorate([
    (0, common_1.Post)(routes_helper_1.BANNER_KTH_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idKth } = r.body;
                const storageFilePath = AdminKthFileUploadsController_1.KTH_BANNER_PATH +
                    AdminKthFileUploadsController_1.getKthIdDirectoryPath(idKth);
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
], AdminKthFileUploadsController.prototype, "uploadBanner", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.BANNER_KTH_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminKthFileUploadsController.prototype, "seeBanner", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.PROGRAM_KTH_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idKth } = r.body;
                const storageFilePath = AdminKthFileUploadsController_1.KTH_PROGRAM_IMG_PATH +
                    AdminKthFileUploadsController_1.getKthIdDirectoryPath(idKth);
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
], AdminKthFileUploadsController.prototype, "uploadProgramImg", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.PROGRAM_KTH_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminKthFileUploadsController.prototype, "seeProgramImg", null);
AdminKthFileUploadsController = AdminKthFileUploadsController_1 = __decorate([
    (0, common_1.Controller)(routes_helper_1.ADMIN_KTH_FILE_UPLOADS_CTRL),
    __metadata("design:paramtypes", [inclukathon_program_service_1.InclukathonProgramService])
], AdminKthFileUploadsController);
exports.AdminKthFileUploadsController = AdminKthFileUploadsController;
//# sourceMappingURL=admin.kth.file-uploads.controller.js.map