import { TeamArborescenceDb } from '../entities/teamArborescence.entity';
declare const SaveTeamArborescenceDto_base: import("@nestjs/mapped-types").MappedType<Partial<TeamArborescenceDb>>;
export declare class SaveTeamArborescenceDto extends SaveTeamArborescenceDto_base {
    id?: string;
    companyId: string;
}
export {};
