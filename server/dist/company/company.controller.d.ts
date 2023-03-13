import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { SaveCompanyDto } from './dto/save.company.dto';
import { AvailableRegionDto } from './dto/availableRegion.dto';
import { SaveAvailableRegionDto } from './dto/saveAvailableRegion.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    saveArborescence(saveAvailableRegionDto: SaveAvailableRegionDto): Promise<AvailableRegionDto>;
    save(saveCompanyDto: SaveCompanyDto): Promise<CompanyDto>;
    findAllLight(): Promise<CompanyDto[]>;
    findOne(companyId: string): Promise<CompanyDto>;
    findAll(): Promise<CompanyDto[]>;
    deleteOneAvailableRegion(idAvailableRegion: string, idCompany: string): Promise<AvailableRegionDto[]>;
}
