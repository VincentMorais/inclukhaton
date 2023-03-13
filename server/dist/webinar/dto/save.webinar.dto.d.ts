import { WebinarDb } from '../entities/webinar.entity';
declare const SaveWebinarDto_base: import("@nestjs/mapped-types").MappedType<Partial<WebinarDb>>;
export declare class SaveWebinarDto extends SaveWebinarDto_base {
    id?: string;
    companyId?: string;
}
export {};
