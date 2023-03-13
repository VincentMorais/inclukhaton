"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mail_sender_1 = require("../mail/mail.sender");
const mongoose_1 = require("@nestjs/mongoose");
const collections_provider_1 = require("../provider/collections.provider");
const mongoose_2 = require("mongoose");
let EmailService = EmailService_1 = class EmailService {
    constructor(emailDb) {
        this.emailDb = emailDb;
    }
    renderNeeds(contactBodyDto) {
        let wantedProjects = 'Projet(s) coché(s): ';
        for (const key in contactBodyDto) {
            if (contactBodyDto[key]) {
                wantedProjects += ' ' + key + ' ';
            }
        }
        return wantedProjects;
    }
    async sendContactEmail(contactBodyDto) {
        const subject = '[INCLUKATHON] Demande de prise de contact';
        const text = `
Prise de contact:
${contactBodyDto.firstName} ${contactBodyDto.lastName}, entreprise: ${contactBodyDto.company}
${contactBodyDto.email} ${contactBodyDto.phone}

${contactBodyDto.message}
`;
        const html = `
<h1>Prise de contact:</h1>
<p>${contactBodyDto.firstName} ${contactBodyDto.lastName}, entreprise: ${contactBodyDto.company}</p>
<p>${contactBodyDto.email} ${contactBodyDto.phone}</p>

<p>${contactBodyDto.message}</p>

<p>${this.renderNeeds(contactBodyDto)}</p>
`;
        const emailSent = await mail_sender_1.MailSender.sendToCompany(subject, text, html);
        if (!emailSent) {
            return null;
        }
        emailSent.mailType = EmailService_1.SEND_CONTACT_MAIL;
        const newEmailDb = new this.emailDb(emailSent);
        await newEmailDb.save();
    }
};
EmailService.SEND_CONTACT_MAIL = 'send-contact-mail';
EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collections_provider_1.EMAIL_SENT_COLLECTION_NAME)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map