import { ContactMailDto } from './contact.mail.dto';
import { Model } from 'mongoose';
import { EmailDocument } from './sent-email.entity';
export declare class EmailService {
    private readonly emailDb;
    constructor(emailDb: Model<EmailDocument>);
    static readonly SEND_CONTACT_MAIL = "send-contact-mail";
    renderNeeds(contactBodyDto: ContactMailDto): string;
    sendContactEmail(contactBodyDto: ContactMailDto): Promise<any>;
}
