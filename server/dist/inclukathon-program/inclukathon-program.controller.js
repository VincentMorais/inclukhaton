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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InclukathonProgramController = void 0;
const common_1 = require("@nestjs/common");
const inclukathon_program_service_1 = require("./inclukathon-program.service");
const inclukathon_dto_1 = require("./models/dto/inclukathon.dto");
const save_inclukathon_dto_1 = require("./models/dto/creation/save.inclukathon.dto");
const save_bai_dto_1 = require("./models/dto/creation/save.bai.dto");
const bai_dto_1 = require("./models/dto/bai.dto");
const bai_kth_service_1 = require("./bai/bai-kth.service");
const kth_scr_association_dto_1 = require("./models/dto/kth-scr-association.dto");
const kth_scr_association_service_1 = require("./kthScrAssociation/kth-scr-association.service");
const save_kth_scr_association_1 = require("./models/dto/creation/save.kth-scr-association");
const delivery_kth_service_1 = require("./delivery/delivery-kth.service");
const deliveries_dto_1 = require("./models/dto/deliveries.dto");
const routes_helper_1 = require("../provider/routes.helper");
const save_deliveries_dto_1 = require("./models/dto/creation/save.deliveries.dto");
const save_notation_delivery_dto_1 = require("./models/dto/creation/save.notation-delivery.dto");
const notation_delivery_dto_1 = require("./models/dto/notation-delivery.dto");
let InclukathonProgramController = class InclukathonProgramController {
    constructor(inclukathonProgramService, baiProgramService, kthScrAssociationService, deliveryKthService) {
        this.inclukathonProgramService = inclukathonProgramService;
        this.baiProgramService = baiProgramService;
        this.kthScrAssociationService = kthScrAssociationService;
        this.deliveryKthService = deliveryKthService;
    }
    async findForCompanyAssociations() {
        const incluscores = await this.inclukathonProgramService.findAll(true);
        return incluscores.map((i) => new inclukathon_dto_1.InclukathonDto(i));
    }
    async saveDelivery(delivery) {
        delivery._id = delivery.id;
        delete delivery.notation;
        const isCreation = !delivery._id;
        const deliveryDb = await this.deliveryKthService.save(delivery);
        if (isCreation) {
            await this.inclukathonProgramService.saveDeliveryToKth(delivery.idKth, deliveryDb);
        }
        return new deliveries_dto_1.DeliveriesDto(deliveryDb);
    }
    async saveNotationDelivery(notationToSaveDto) {
        notationToSaveDto._id = notationToSaveDto.id;
        const isCreation = !notationToSaveDto._id;
        const notationDeliveryDb = await this.deliveryKthService.saveNotationDelivery(notationToSaveDto);
        if (isCreation) {
            await this.deliveryKthService.pushNewNotationToDelivery(notationToSaveDto.idDelivery, notationDeliveryDb);
        }
        return new notation_delivery_dto_1.NotationDeliveryDto(notationDeliveryDb);
    }
    async saveBai(bai) {
        bai._id = bai.id;
        delete bai.imgCoverPath;
        delete bai.filesPath;
        const isCreation = !bai._id;
        const baiDb = await this.baiProgramService.save(bai);
        if (isCreation) {
            await this.inclukathonProgramService.saveBaiToKth(bai.idKth, baiDb);
        }
        return new bai_dto_1.BaiDto(baiDb);
    }
    async saveKthScrAssociation(kthScrAssociation) {
        delete kthScrAssociation.launchIncluscore;
        kthScrAssociation._id = kthScrAssociation.id;
        const isCreation = !kthScrAssociation._id;
        const kthScrAssociationDb = await this.kthScrAssociationService.save(kthScrAssociation);
        if (isCreation) {
            await this.inclukathonProgramService.saveKthScrAssociationToKth(kthScrAssociation.idKth, kthScrAssociationDb);
        }
        return new kth_scr_association_dto_1.KthScrAssociationDto(kthScrAssociationDb);
    }
    async save(inclukathon) {
        inclukathon._id = inclukathon.id;
        delete inclukathon.bai;
        delete inclukathon.kthScrAssociation;
        delete inclukathon.deliveries;
        delete inclukathon.bannerImgPath;
        delete inclukathon.programImgPath;
        const inclukathonDb = await this.inclukathonProgramService.save(inclukathon);
        return new inclukathon_dto_1.InclukathonDto(inclukathonDb);
    }
    async findOneScrAssociation(idKthScr) {
        const scr = await this.kthScrAssociationService.findOne(idKthScr);
        return new kth_scr_association_dto_1.KthScrAssociationDto(scr);
    }
    async findOneBai(idBai) {
        const bai = await this.baiProgramService.findOne(idBai);
        return new bai_dto_1.BaiDto(bai);
    }
    async findOneDelivery(idDelivery) {
        const delivery = await this.deliveryKthService.findOne(idDelivery);
        return new deliveries_dto_1.DeliveriesDto(delivery);
    }
    async findOne(idInclukathon) {
        const incluscore = await this.inclukathonProgramService.findOne(idInclukathon);
        return new inclukathon_dto_1.InclukathonDto(incluscore);
    }
    async findAll() {
        const incluscores = await this.inclukathonProgramService.findAll();
        return incluscores.map((i) => new inclukathon_dto_1.InclukathonDto(i));
    }
    async deleteOne(idInclukathon) {
        await this.inclukathonProgramService.deleteOne(idInclukathon);
        const inclukathons = await this.inclukathonProgramService.findAll();
        return inclukathons.map((inclukathonDb) => new inclukathon_dto_1.InclukathonDto(inclukathonDb));
    }
};
__decorate([
    (0, common_1.Get)('for-company-association'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findForCompanyAssociations", null);
__decorate([
    (0, common_1.Post)('delivery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_deliveries_dto_1.SaveDeliveriesDto]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "saveDelivery", null);
__decorate([
    (0, common_1.Post)('notation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_notation_delivery_dto_1.SaveNotationDeliveryDto]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "saveNotationDelivery", null);
__decorate([
    (0, common_1.Post)('bai'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_bai_dto_1.SaveBaiDto]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "saveBai", null);
__decorate([
    (0, common_1.Post)('kth-scr-association'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_kth_scr_association_1.SaveKthScrAssociationDto]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "saveKthScrAssociation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_inclukathon_dto_1.SaveInclukathonDto]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('kth-scr-association/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findOneScrAssociation", null);
__decorate([
    (0, common_1.Get)('bai/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findOneBai", null);
__decorate([
    (0, common_1.Get)('delivery/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findOneDelivery", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('idInclukathon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InclukathonProgramController.prototype, "deleteOne", null);
InclukathonProgramController = __decorate([
    (0, common_1.Controller)(routes_helper_1.INCLUKATHON_CTRL),
    __metadata("design:paramtypes", [inclukathon_program_service_1.InclukathonProgramService,
        bai_kth_service_1.BaiKthService,
        kth_scr_association_service_1.KthScrAssociationService,
        delivery_kth_service_1.DeliveryKthService])
], InclukathonProgramController);
exports.InclukathonProgramController = InclukathonProgramController;
//# sourceMappingURL=inclukathon-program.controller.js.map