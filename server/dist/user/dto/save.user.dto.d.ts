import { UserDb } from '../entity/user.entity';
declare const SaveUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDb>>;
export declare class SaveUserDto extends SaveUserDto_base {
    id?: string;
}
export {};
