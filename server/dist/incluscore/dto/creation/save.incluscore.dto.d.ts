import { IncluscoreDb } from '../../entities/incluscore.entity';
declare const SaveIncluscoreDto_base: import("@nestjs/mapped-types").MappedType<Partial<IncluscoreDb>>;
export declare class SaveIncluscoreDto extends SaveIncluscoreDto_base {
    id?: string;
}
export {};
