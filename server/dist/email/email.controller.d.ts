import { ContactMailDto } from './contact.mail.dto';
import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendContact(contactBodyDto: ContactMailDto): Promise<void>;
}
