import { TeamDb } from '../entities/team.entity';
declare const SaveTeamDto_base: import("@nestjs/mapped-types").MappedType<Partial<TeamDb>>;
export declare class SaveTeamDto extends SaveTeamDto_base {
    id?: string;
    companyId?: string;
}
export {};
