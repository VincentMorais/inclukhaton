import { Model } from 'mongoose';
import { SaveWebinarDto } from './dto/save.webinar.dto';
import { WebinarDb, WebinarDocument } from './entities/webinar.entity';
export declare class WebinarService {
    private readonly webinarDb;
    constructor(webinarDb: Model<WebinarDocument>);
    save(saveWebinarDto: SaveWebinarDto): Promise<WebinarDb>;
    findOne(webinarId: string): Promise<WebinarDb>;
    findAll(): Promise<WebinarDb[]>;
}
