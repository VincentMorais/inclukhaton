"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const email_controller_1 = require("./email/email.controller");
const email_service_1 = require("./email/email.service");
const collections_provider_1 = require("./provider/collections.provider");
const sent_email_entity_1 = require("./email/sent-email.entity");
const propositions_entity_1 = require("./incluscore/entities/propositions.entity");
const questions_entity_1 = require("./incluscore/entities/questions.entity");
const themes_entity_1 = require("./incluscore/entities/themes.entity");
const user_entity_1 = require("./user/entity/user.entity");
const company_entity_1 = require("./company/entities/company.entity");
const incluscore_entity_1 = require("./incluscore/entities/incluscore.entity");
const team_entity_1 = require("./team/entities/team.entity");
const login_entity_1 = require("./login/entities/login.entity");
const launch_incluscore_entity_1 = require("./incluscore/entities/launch.incluscore.entity");
const userTheme_entity_1 = require("./incluscore/entities/userTheme.entity");
const userAnswer_entity_1 = require("./incluscore/entities/userAnswer.entity");
const file_uploads_controller_1 = require("./file-uploads/file-uploads.controller");
const admin_kth_file_uploads_controller_1 = require("./file-uploads/kth/admin.kth.file-uploads.controller");
const bai_kth_service_1 = require("./inclukathon-program/bai/bai-kth.service");
const file_uploads_service_1 = require("./file-uploads/file-uploads.service");
const user_service_1 = require("./user/service/user.service");
const company_service_1 = require("./company/company.service");
const incluscore_service_1 = require("./incluscore/incluscore.service");
const inclukathon_program_service_1 = require("./inclukathon-program/inclukathon-program.service");
const userTheme_service_1 = require("./incluscore/progression/userTheme.service");
const login_service_1 = require("./login/login.service");
const theme_service_1 = require("./incluscore/theme/theme.service");
const question_service_1 = require("./incluscore/theme/question.service");
const proposition_service_1 = require("./incluscore/theme/proposition.service");
const launch_incluscore_service_1 = require("./incluscore/progression/launch.incluscore.service");
const bai_entity_1 = require("./inclukathon-program/models/bai.entity");
const inclukathon_program_entity_1 = require("./inclukathon-program/models/inclukathon-program.entity");
const kth_scr_association_entity_1 = require("./inclukathon-program/models/kth-scr-association.entity");
const deliveries_entity_1 = require("./inclukathon-program/models/deliveries.entity");
const login_controller_1 = require("./login/login.controller");
const company_controller_1 = require("./company/company.controller");
const team_controller_1 = require("./team/team.controller");
const user_controller_1 = require("./user/controller/user.controller");
const incluscore_controller_1 = require("./incluscore/incluscore.controller");
const userTheme_controller_1 = require("./incluscore/progression/userTheme.controller");
const theme_controller_1 = require("./incluscore/theme/theme.controller");
const question_controller_1 = require("./incluscore/theme/question.controller");
const proposition_controller_1 = require("./incluscore/theme/proposition.controller");
const launch_incluscore_controller_1 = require("./incluscore/progression/launch.incluscore.controller");
const inclukathon_program_controller_1 = require("./inclukathon-program/inclukathon-program.controller");
const admin_bai_file_uploads_controller_1 = require("./file-uploads/kth/admin.bai.file-uploads.controller");
const team_service_1 = require("./team/team.service");
const kth_scr_association_service_1 = require("./inclukathon-program/kthScrAssociation/kth-scr-association.service");
const delivery_kth_service_1 = require("./inclukathon-program/delivery/delivery-kth.service");
const launch_inclukathon_controller_1 = require("./inclukathon-program/launch/launch.inclukathon.controller");
const launch_inclukathon_service_1 = require("./inclukathon-program/launch/launch.inclukathon.service");
const launch_inclukathon_entity_1 = require("./inclukathon-program/models/launch.inclukathon.entity");
const delivery_file_uploads_controller_1 = require("./file-uploads/kth/delivery.file-uploads.controller");
const team_delivery_entity_1 = require("./inclukathon-program/models/team-delivery.entity");
const notation_delivery_entity_1 = require("./inclukathon-program/models/notation-delivery.entity");
const launch_incluscore_stats_service_1 = require("./incluscore/progression/launch.incluscore.stats.service");
const all_exceptions_filter_1 = require("./errors/all-exceptions.filter");
const core_1 = require("@nestjs/core");
const chat_module_1 = require("./chatWebSocket/chat.module");
const teamArborescence_entity_1 = require("./company/entities/teamArborescence.entity");
const translation_controller_1 = require("./translations/translation.controller");
const webinar_controller_1 = require("./webinar/webinar.controller");
const webinar_service_1 = require("./webinar/webinar.service");
const webinar_entity_1 = require("./webinar/entities/webinar.entity");
const availableRegion_entity_1 = require("./company/entities/availableRegion.entity");
const stats_controller_1 = require("./stats/stats.controller");
const util = require('util');
const encoder = new util.TextEncoder('utf-8');
global.TextEncoder = encoder;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '../public/root'),
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/inclukathon-x-etna'),
            mongoose_1.MongooseModule.forFeature([
                { name: collections_provider_1.DELIVERIES_COLLECTION_NAME, schema: deliveries_entity_1.DeliveriesEntity },
                {
                    name: collections_provider_1.NOTATION_DELIVERY_COLLECTION_NAME,
                    schema: notation_delivery_entity_1.NotationDeliveryEntity,
                },
                { name: collections_provider_1.EMAIL_SENT_COLLECTION_NAME, schema: sent_email_entity_1.EmailEntity },
                { name: collections_provider_1.THEMES_SCR_COLLECTION_NAME, schema: themes_entity_1.ThemesIncluscoreEntity },
                { name: collections_provider_1.USER_COLLECTION_NAME, schema: user_entity_1.UserEntity },
                { name: collections_provider_1.COMPANY_COLLECTION_NAME, schema: company_entity_1.CompanyEntity },
                { name: collections_provider_1.INCLUSCORE_COLLECTION_NAME, schema: incluscore_entity_1.IncluscoreEntity },
                { name: collections_provider_1.TEAM_COLLECTION_NAME, schema: team_entity_1.TeamEntity },
                { name: collections_provider_1.TEAM_ARBORESCENCE_COLLECTION_NAME, schema: teamArborescence_entity_1.TeamArborescenceEntity },
                { name: collections_provider_1.AVAILABLE_REGION_COLLECTION_NAME, schema: availableRegion_entity_1.AvailableRegionEntity },
                { name: collections_provider_1.LOGIN_TOKENS_COLLECTION_NAME, schema: login_entity_1.LoginEntity },
                { name: collections_provider_1.LAUNCH_SCR_COLLECTION, schema: launch_incluscore_entity_1.LaunchIncluscoreEntity },
                { name: collections_provider_1.LAUNCH_KTH_COLLECTION, schema: launch_inclukathon_entity_1.LaunchInclukathonEntity },
                { name: collections_provider_1.BAI_COLLECTION_NAME, schema: bai_entity_1.BaiEntity },
                {
                    name: collections_provider_1.INCLUKATHON_PROGRAM_COLLECTION_NAME,
                    schema: inclukathon_program_entity_1.InclukathonProgramEntity,
                },
                {
                    name: collections_provider_1.KTH_SCR_ASSOCIATION_COLLECTION_NAME,
                    schema: kth_scr_association_entity_1.KthScrAssociationEntity,
                },
                {
                    name: collections_provider_1.PROPOSITIONS_SCR_COLLECTION_NAME,
                    schema: propositions_entity_1.PropositionsIncluscoreEntity,
                },
                {
                    name: collections_provider_1.QUESTIONS_SCR_COLLECTION_NAME,
                    schema: questions_entity_1.QuestionsIncluscoreEntity,
                },
                {
                    name: collections_provider_1.USER_THEME_SCR_COLLECTION_NAME,
                    schema: userTheme_entity_1.UserThemeIncluscoreEntity,
                },
                {
                    name: collections_provider_1.USER_ANSWER_SCR_COLLECTION_NAME,
                    schema: userAnswer_entity_1.UserAnswerIncluscoreEntity,
                },
                {
                    name: collections_provider_1.TEAM_DELIVERY_COLLECTION_NAME,
                    schema: team_delivery_entity_1.TeamDeliveryEntity,
                },
                {
                    name: collections_provider_1.WEBINAR_COLLECTION_NAME,
                    schema: webinar_entity_1.WebinarEntity,
                },
            ]),
            chat_module_1.ChatModule,
        ],
        controllers: [
            admin_bai_file_uploads_controller_1.AdminBaiFileUploadsController,
            admin_kth_file_uploads_controller_1.AdminKthFileUploadsController,
            app_controller_1.AppController,
            company_controller_1.CompanyController,
            email_controller_1.EmailController,
            file_uploads_controller_1.FileUploadsController,
            inclukathon_program_controller_1.InclukathonProgramController,
            incluscore_controller_1.IncluscoreController,
            launch_incluscore_controller_1.LaunchScrController,
            launch_inclukathon_controller_1.LaunchKthController,
            login_controller_1.LoginController,
            proposition_controller_1.PropositionController,
            question_controller_1.QuestionController,
            team_controller_1.TeamController,
            theme_controller_1.ThemeController,
            user_controller_1.UserController,
            userTheme_controller_1.UserThemeController,
            delivery_file_uploads_controller_1.DeliveryFileUploadsController,
            translation_controller_1.TranslationController,
            webinar_controller_1.WebinarController,
            stats_controller_1.StatsController,
        ],
        providers: [
            app_service_1.AppService,
            bai_kth_service_1.BaiKthService,
            company_service_1.CompanyService,
            email_service_1.EmailService,
            file_uploads_service_1.FileUploadsService,
            kth_scr_association_service_1.KthScrAssociationService,
            launch_incluscore_service_1.LaunchIncluscoreService,
            launch_incluscore_stats_service_1.LScrStatService,
            launch_inclukathon_service_1.LaunchInclukathonService,
            login_service_1.LoginService,
            inclukathon_program_service_1.InclukathonProgramService,
            incluscore_service_1.IncluscoreService,
            proposition_service_1.PropositionIncluscoreService,
            question_service_1.QuestionIncluscoreService,
            team_service_1.TeamService,
            theme_service_1.ThemeIncluscoreService,
            user_service_1.UserService,
            userTheme_service_1.UserThemeService,
            delivery_kth_service_1.DeliveryKthService,
            webinar_service_1.WebinarService,
            {
                provide: core_1.APP_FILTER,
                useClass: all_exceptions_filter_1.AllExceptionsFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map