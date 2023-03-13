/// <reference types="multer" />
import { DeliveryKthService } from '../../inclukathon-program/delivery/delivery-kth.service';
import { TeamService } from '../../team/team.service';
import { TeamDeliveryDocument } from '../../inclukathon-program/models/team-delivery.entity';
import { Model } from 'mongoose';
export declare class DeliveryFileUploadsController {
    private readonly deliveryKthService;
    private readonly teamService;
    private readonly teamDeliveryDb;
    constructor(deliveryKthService: DeliveryKthService, teamService: TeamService, teamDeliveryDb: Model<TeamDeliveryDocument>);
    private static readonly SINGLE_DELIVERY_PATH;
    static getDeliverySinglePath: (idDelivery: any, idTeam: any) => string;
    uploadSingleDelivery(file: Express.Multer.File, body: any): Promise<void>;
    seeDeliveryFiles(load: any, res: any): Promise<any>;
    deleteOne(body: any): Promise<void>;
}
