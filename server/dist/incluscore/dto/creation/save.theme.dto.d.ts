import { ThemesIncluscoreDb } from '../../entities/themes.entity';
declare const SaveThemeDto_base: import("@nestjs/mapped-types").MappedType<Partial<ThemesIncluscoreDb>>;
export declare class SaveThemeDto extends SaveThemeDto_base {
    id?: string;
    incluscoreId: string;
}
export {};
