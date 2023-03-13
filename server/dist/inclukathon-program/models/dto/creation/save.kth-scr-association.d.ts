import { KthScrAssociationDb } from '../../kth-scr-association.entity';
declare const SaveKthScrAssociationDto_base: import("@nestjs/mapped-types").MappedType<Partial<KthScrAssociationDb>>;
export declare class SaveKthScrAssociationDto extends SaveKthScrAssociationDto_base {
    id?: string;
    idKth?: string;
}
export {};
