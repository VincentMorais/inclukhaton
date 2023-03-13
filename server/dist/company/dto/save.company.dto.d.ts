import { CompanyDb } from '../entities/company.entity';
declare const SaveCompanyDto_base: import("@nestjs/mapped-types").MappedType<Partial<CompanyDb>>;
export declare class SaveCompanyDto extends SaveCompanyDto_base {
    id?: string;
}
export {};
