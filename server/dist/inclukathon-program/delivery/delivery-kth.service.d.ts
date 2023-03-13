import { Model } from 'mongoose';
import { DeliveriesDb, DeliveriesDocument } from '../models/deliveries.entity';
import { SaveDeliveriesDto } from '../models/dto/creation/save.deliveries.dto';
import { SaveNotationDeliveryDto } from '../models/dto/creation/save.notation-delivery.dto';
import { NotationDeliveryDb, NotationDeliveryDocument } from '../models/notation-delivery.entity';
export declare class DeliveryKthService {
    private readonly deliveryDb;
    private readonly notationDeliveryDb;
    constructor(deliveryDb: Model<DeliveriesDocument>, notationDeliveryDb: Model<NotationDeliveryDocument>);
    save(update: SaveDeliveriesDto): Promise<DeliveriesDb>;
    saveNotationDelivery(update: SaveNotationDeliveryDto): Promise<NotationDeliveryDb>;
    pushNewNotationToDelivery(id: string, notation: NotationDeliveryDb): Promise<DeliveriesDocument>;
    findOne(id: string): Promise<DeliveriesDb>;
    findAll(): Promise<DeliveriesDb[]>;
    deleteOne(id: string): Promise<void>;
}
