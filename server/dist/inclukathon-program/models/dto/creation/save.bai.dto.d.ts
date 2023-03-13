import { BaiDb } from '../../bai.entity';
declare const SaveBaiDto_base: import("@nestjs/mapped-types").MappedType<Partial<BaiDb>>;
export declare class SaveBaiDto extends SaveBaiDto_base {
    id?: string;
    idKth?: string;
}
export {};
