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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeDto = void 0;
const class_validator_1 = require("class-validator");
const question_dto_1 = require("./question.dto");
class ThemeDto {
    constructor(themeDb) {
        var _a, _b;
        this.id = (_a = themeDb) === null || _a === void 0 ? void 0 : _a._id;
        this.name = themeDb === null || themeDb === void 0 ? void 0 : themeDb.name;
        this['name-en'] = themeDb ? themeDb['name-en'] : null;
        this['name-es'] = themeDb ? themeDb['name-es'] : null;
        this.enabled = themeDb === null || themeDb === void 0 ? void 0 : themeDb.enabled;
        this.imgPath = themeDb === null || themeDb === void 0 ? void 0 : themeDb.imgPath;
        this.imgPath2 = themeDb === null || themeDb === void 0 ? void 0 : themeDb.imgPath2;
        this.imgPath3 = themeDb === null || themeDb === void 0 ? void 0 : themeDb.imgPath3;
        this.questions = (_b = themeDb === null || themeDb === void 0 ? void 0 : themeDb.questions) === null || _b === void 0 ? void 0 : _b.map((q) => new question_dto_1.QuestionDto(q));
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ThemeDto.prototype, "name", void 0);
exports.ThemeDto = ThemeDto;
//# sourceMappingURL=theme.dto.js.map