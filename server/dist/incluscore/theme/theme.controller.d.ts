import { ThemeIncluscoreService } from './theme.service';
import { ThemeDto } from '../dto/theme.dto';
import { IncluscoreService } from '../incluscore.service';
import { SaveThemeDto } from '../dto/creation/save.theme.dto';
export declare class ThemeController {
    private readonly themeService;
    private readonly incluscoreService;
    constructor(themeService: ThemeIncluscoreService, incluscoreService: IncluscoreService);
    save(t: SaveThemeDto): Promise<ThemeDto>;
    findOne(id: string): Promise<ThemeDto>;
    findAll(): Promise<ThemeDto[]>;
    deleteOne(idTheme: string, idIncluscore: string): Promise<ThemeDto[]>;
}
