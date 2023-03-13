import { NotationDeliveryDto } from '../notation-delivery.dto';
declare const SaveNotationDeliveryDto_base: import("@nestjs/mapped-types").MappedType<Partial<NotationDeliveryDto>>;
export declare class SaveNotationDeliveryDto extends SaveNotationDeliveryDto_base {
    id?: string;
    idKth?: string;
    idDelivery?: string;
    idTeam?: string;
    idNotationEvaluated?: string;
}
export {};
