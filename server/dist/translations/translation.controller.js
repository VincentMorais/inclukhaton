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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationController = void 0;
const common_1 = require("@nestjs/common");
const routes_helper_1 = require("../provider/routes.helper");
const LangUtils_1 = require("./LangUtils");
const deepl = require("deepl-node");
let TranslationController = class TranslationController {
    constructor() {
        this.deeplAutoTranslation = async (textToTranslate, lang) => {
            const deeplAuthKey = '';
            const translator = new deepl.Translator(deeplAuthKey);
            let deeplLang = lang;
            if (lang === LangUtils_1.ILang.EN) {
                deeplLang = 'en-US';
            }
            return await translator.translateText(textToTranslate, LangUtils_1.ILang.FR, deeplLang);
        };
    }
    async translate(req) {
        var _a;
        const text = req.text;
        const lang = req.lang;
        return (_a = (await this.deeplAutoTranslation(text, lang))) === null || _a === void 0 ? void 0 : _a.text;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TranslationController.prototype, "translate", null);
TranslationController = __decorate([
    (0, common_1.Controller)(routes_helper_1.TRANSLATION_CTRL)
], TranslationController);
exports.TranslationController = TranslationController;
//# sourceMappingURL=translation.controller.js.map