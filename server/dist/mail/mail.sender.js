"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSender = void 0;
const nodemailer = require('nodemailer');
class MailSender {
    static async sendToCompany(subject, text, html) {
        try {
            const replacement = /\n/g;
            html = html.replace(replacement, '<br />');
            const emailDb = {
                from: MailSender.inclukathonSender,
                to: MailSender.inclukathonReceiver,
                subject,
                text,
                html,
            };
            const transporter = nodemailer.createTransport(MailSender.credentials);
            await transporter.sendMail(emailDb);
            return emailDb;
        }
        catch (e) {
            console.error('Error while sending mail', e);
        }
    }
}
exports.MailSender = MailSender;
MailSender.credentials = {
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
        user: '',
        pass: '',
    },
};
MailSender.inclukathonSender = '"" <>';
MailSender.inclukathonReceiver = ', ';
//# sourceMappingURL=mail.sender.js.map