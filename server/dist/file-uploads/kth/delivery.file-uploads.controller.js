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
var DeliveryFileUploadsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryFileUploadsController = void 0;
const routes_helper_1 = require("../../provider/routes.helper");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const delivery_kth_service_1 = require("../../inclukathon-program/delivery/delivery-kth.service");
const fs = require("fs");
const team_service_1 = require("../../team/team.service");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../../provider/collections.provider");
const mongoose_2 = require("mongoose");
let DeliveryFileUploadsController = DeliveryFileUploadsController_1 = class DeliveryFileUploadsController {
    constructor(deliveryKthService, teamService, teamDeliveryDb) {
        this.deliveryKthService = deliveryKthService;
        this.teamService = teamService;
        this.teamDeliveryDb = teamDeliveryDb;
    }
    async uploadSingleDelivery(file, body) {
        const { idTeam, idDelivery, idUser, unixTime } = body;
        const specificFilePath = DeliveryFileUploadsController_1.getDeliverySinglePath(idDelivery, idTeam);
        const dbFilePath = specificFilePath + file.originalname;
        const teamDb = await this.teamService.findOne(idTeam);
        if (teamDb.teamDelivery.length > 0) {
            const currentDelivery = teamDb.teamDelivery.find((t) => t.delivery.toString() === idDelivery);
            if (currentDelivery) {
                const filenameHasToBeSaved = currentDelivery.filesPath.length < 1 || !currentDelivery.filesPath.find((p) => p === dbFilePath);
                if (filenameHasToBeSaved) {
                    currentDelivery.filesPath.push(dbFilePath);
                }
                currentDelivery.lastUploaderUserId = idUser;
                currentDelivery.lastUpdateUnixTime = unixTime;
                await currentDelivery.save();
                await teamDb.save();
                return;
            }
        }
        const teamDeliveryDb = new this.teamDeliveryDb({
            delivery: idDelivery,
            filesPath: [dbFilePath],
            lastUploaderUserId: idUser,
            lastUpdateUnixTime: unixTime,
        });
        await teamDeliveryDb.save();
        teamDb.teamDelivery.push(teamDeliveryDb);
        await teamDb.save();
    }
    async seeDeliveryFiles(load, res) {
        return res.sendFile(load, {
            root: DeliveryFileUploadsController_1.SINGLE_DELIVERY_PATH,
        });
    }
    async deleteOne(body) {
        const { idTeam, idDelivery, filename } = body;
        const uploadPath = DeliveryFileUploadsController_1.getDeliverySinglePath(idDelivery, idTeam);
        const storageFilePath = DeliveryFileUploadsController_1.SINGLE_DELIVERY_PATH + uploadPath + filename;
        const dbFilePath = uploadPath + filename;
        fs.unlinkSync(storageFilePath);
        const teamDb = await this.teamService.findOne(idTeam);
        const currentDelivery = teamDb.teamDelivery.find((t) => t.delivery.toString() === idDelivery);
        currentDelivery.filesPath = [...currentDelivery.filesPath.filter((path) => path !== dbFilePath)];
        await currentDelivery.save();
        await teamDb.save();
        return;
    }
};
DeliveryFileUploadsController.SINGLE_DELIVERY_PATH = './../uploaded_files/single-delivery/';
DeliveryFileUploadsController.getDeliverySinglePath = (idDelivery, idTeam) => `delivery-${idDelivery}/team-${idTeam}/`;
__decorate([
    (0, common_1.Post)(routes_helper_1.SINGLE_DELIVERY_ENDPOINT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('filepond', {
        storage: (0, multer_1.diskStorage)({
            destination: (r, f, cb) => {
                const { idTeam, idDelivery } = r.body;
                const storageFilePath = DeliveryFileUploadsController_1.SINGLE_DELIVERY_PATH +
                    DeliveryFileUploadsController_1.getDeliverySinglePath(idDelivery, idTeam);
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
], DeliveryFileUploadsController.prototype, "uploadSingleDelivery", null);
__decorate([
    (0, common_1.Get)(routes_helper_1.SINGLE_DELIVERY_ENDPOINT),
    __param(0, (0, common_1.Query)('load')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DeliveryFileUploadsController.prototype, "seeDeliveryFiles", null);
__decorate([
    (0, common_1.Delete)(routes_helper_1.SINGLE_DELIVERY_ENDPOINT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeliveryFileUploadsController.prototype, "deleteOne", null);
DeliveryFileUploadsController = DeliveryFileUploadsController_1 = __decorate([
    (0, common_1.Controller)(routes_helper_1.DELIVERY_FILE_UPLOADS_CTRL),
    __param(2, (0, mongoose_1.InjectModel)(collections_provider_1.TEAM_DELIVERY_COLLECTION_NAME)),
    __metadata("design:paramtypes", [delivery_kth_service_1.DeliveryKthService,
        team_service_1.TeamService,
        mongoose_2.Model])
], DeliveryFileUploadsController);
exports.DeliveryFileUploadsController = DeliveryFileUploadsController;
//# sourceMappingURL=delivery.file-uploads.controller.js.map