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
exports.IncluscoreDto = void 0;
const class_validator_1 = require("class-validator");
const theme_dto_1 = require("./theme.dto");
class IncluscoreDto {
    constructor(incluscoreDb) {
        var _a;
        this.id = incluscoreDb._id;
        this.name = incluscoreDb.name;
        this['name-en'] = incluscoreDb['name-en'];
        this['name-es'] = incluscoreDb['name-es'];
        this.smallName = incluscoreDb.smallName;
        this['smallName-en'] = incluscoreDb['smallName-en'];
        this['smallName-es'] = incluscoreDb['smallName-es'];
        this.enabled = incluscoreDb.enabled;
        this.canBePublic = incluscoreDb.canBePublic;
        this.description = incluscoreDb.description;
        this['description-en'] = incluscoreDb['description-en'];
        this['description-es'] = incluscoreDb['description-es'];
        if (((_a = incluscoreDb.themes) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.themes = incluscoreDb.themes.map((t) => new theme_dto_1.ThemeDto(t));
        }
        this.isInclucard = incluscoreDb.isInclucard;
        this.inclucardColor = incluscoreDb.inclucardColor;
        this.incluscoreColor = incluscoreDb.incluscoreColor;
        this.secondIncluscoreColor = incluscoreDb.secondIncluscoreColor;
        this.displayNewStudentNumber = incluscoreDb.displayNewStudentNumber;
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IncluscoreDto.prototype, "name", void 0);
exports.IncluscoreDto = IncluscoreDto;
//# sourceMappingURL=incluscore.dto.js.map