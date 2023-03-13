"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaiDto = void 0;
class BaiDto {
    constructor(baiDb) {
        this.id = baiDb._id;
        this.rubrique = baiDb.rubrique;
        this.name = baiDb.name;
        this.imgCoverPath = baiDb.imgCoverPath;
        this.filesPath = baiDb.filesPath;
    }
}
exports.BaiDto = BaiDto;
//# sourceMappingURL=bai.dto.js.map