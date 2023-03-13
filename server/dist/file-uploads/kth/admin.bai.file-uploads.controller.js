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
var AdminBaiFileUploadsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBaiFileUploadsController = void 0;
const routes_helper_1 = require("../../provider/routes.helper");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const bai_kth_service_1 = require("../../inclukathon-program/bai/bai-kth.service");
const fs = require("fs");
let AdminBaiFileUploadsController = AdminBaiFileUploadsController_1 = class AdminBaiFileUploadsController {
    constructor(baiKthService) {
        this.baiKthService = baiKthService;
    }
    async uploadBanner(file, body) {
        const { idBai } = body;
        const specificFilePath = AdminBaiFileUploadsController_1.getBaiIdDirectoryPath(idBai);
        const dbFilePath = specificFilePath + file.originalname;
        const baiDb = await this.baiKthService.findOne(idBai);
        const oldPath = baiDb.imgCoverPath;
        baiDb.imgCoverPath = dbFilePath;
        await this.baiKthService.save(baiDb);
        const hasToBeRemoved = fs.existsSync(AdminBaiFileUploadsController_1.BAI_COVER_PATH + oldPath);
        if (hasToBeRemoved) {
            fs.unlinkSync(AdminBaiFileUploadsController_1.BAI_COVER_PATH + oldPath);
        }
    }
    async seeBanner(load, res) {
        return res.sendFile(load, {
            root: AdminBaiFileUploadsController_1.BAI_COVER_PATH,
        });
    }
    async uploadSingleBai(file, body) {
        const { idBai } = body;
        const specificFilePath = AdminBaiFileUploadsController_1.getBaiIdDirectoryPath(idBai);
        const dbFilePath = specificFilePath + file.originalname;
        const baiDb = await this.baiKthService.findOne(idBai);
        const filenameHasToBeSaved = baiDb.filesPath.length < 1 || !baiDb.filesPath.find((p) => p === dbFilePath);
        if (filenameHasToBeSaved) {
            baiDb.filesPath.push(dbFilePath);
        }
        await baiDb.save();
    }
    async seeOneBaiFile(load, res) {
        return res.sendFile(load, {
            root: AdminBaiFileUploadsController_1.BAI_FILES_PATH,
        });
    }
    async deleteOneBaiFile(body) {
        const { idBai, filename } = body;
        const uploadPath = AdminBaiFileUploadsController_1.getBaiIdDirectoryPath(idBai);
        const storageFilePath = AdminBaiFileUploadsController_1.BAI_FILES_PATH + uploadPath + filename;
        const dbFilePath = uploadPath + filename;
        fs.unlinkSync(storageFilePath);
        const baiDb = await this.baiKthService.findOne(idBai);
        baiDb.filesPath = [...baiDb.filesPath.filter((path) => path !== dbFilePath)];
        await baiDb.save();
        return;
    }
};
AdminBaiFileUploadsController.BAI_COVER_PATH = './../uploaded_files/bai-cover/';
AdminBaiFileUploadsController.BAI_FILES_PATH = './../uploaded_files/bai-files/';
AdminBaiFileUploadsController.getBaiIdDirectoryPath = (idBai) => `bai-${idBai}/`;
__decorate([
    (0, common_1.Post)(routes_helper_1.COVER_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idBai } = r.body;
                const storageFilePath = AdminBaiFileUploadsController_1.BAI_COVER_PATH +
                    AdminBaiFileUploadsController_1.getBaiIdDirectoryPath(idBai);
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
], AdminBaiFileUploadsController.prototype, "uploadBanner", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.COVER_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminBaiFileUploadsController.prototype, "seeBanner", null);
__decorate([
    (0, common_1.Post)(routes_helper_1.FILES_EXEMPLES_BAI_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idBai } = r.body;
                const storageFilePath = AdminBaiFileUploadsController_1.BAI_FILES_PATH +
                    AdminBaiFileUploadsController_1.getBaiIdDirectoryPath(idBai);
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
], AdminBaiFileUploadsController.prototype, "uploadSingleBai", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.FILES_EXEMPLES_BAI_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminBaiFileUploadsController.prototype, "seeOneBaiFile", null);
__decorate([
    (0, common_1.Delete)(routes_helper_1.FILES_EXEMPLES_BAI_ENDPOINT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminBaiFileUploadsController.prototype, "deleteOneBaiFile", null);
AdminBaiFileUploadsController = AdminBaiFileUploadsController_1 = __decorate([
    (0, common_1.Controller)(routes_helper_1.ADMIN_BAI_FILE_UPLOADS_CTRL),
    __metadata("design:paramtypes", [bai_kth_service_1.BaiKthService])
], AdminBaiFileUploadsController);
exports.AdminBaiFileUploadsController = AdminBaiFileUploadsController;
//# sourceMappingURL=admin.bai.file-uploads.controller.js.map