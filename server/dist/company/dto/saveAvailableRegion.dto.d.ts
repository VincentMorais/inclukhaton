import { AvailableRegionDb } from '../entities/availableRegion.entity';
declare const SaveAvailableRegionDto_base: import("@nestjs/mapped-types").MappedType<Partial<AvailableRegionDb>>;
export declare class SaveAvailableRegionDto extends SaveAvailableRegionDto_base {
    id?: string;
    companyId: string;
}
export {};
