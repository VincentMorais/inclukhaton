import { NotationDeliveryDb } from '../notation-delivery.entity';
export declare class NotationDeliveryDto {
    constructor(notationDeliveryDb: NotationDeliveryDb);
    _id?: string;
    id: string;
    question: string;
    values: string[];
    selectedValue: string;
    idNotationEvaluated?: string;
}
