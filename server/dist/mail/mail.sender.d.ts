import { EmailDb } from '../email/sent-email.entity';
export declare class MailSender {
    static credentials: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    };
    static readonly inclukathonSender = "\"\" <>";
    static readonly inclukathonReceiver = ", ";
    static sendToCompany(subject: string, text: string, html: string): Promise<EmailDb>;
}
