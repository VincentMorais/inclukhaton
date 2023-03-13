import { InclukathonDto } from '../../inclukathon-program/models/dto/inclukathon.dto';
import { UserDto } from './user.dto';
import { TeamDto } from '../../team/dto/team.dto';
declare const LoggedUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<UserDto>>;
export declare class LoggedUserDto extends LoggedUserDto_base {
    id?: string;
    currentInclukathon?: InclukathonDto;
    teamsToManage?: TeamDto[];
}
export {};
