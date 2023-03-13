"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationDeliveryDto = void 0;
class NotationDeliveryDto {
    constructor(notationDeliveryDb) {
        this.id = notationDeliveryDb._id;
        this.question = notationDeliveryDb.question;
        this.values = notationDeliveryDb.values;
        this.selectedValue = notationDeliveryDb.selectedValue;
        this.idNotationEvaluated = notationDeliveryDb.idNotationEvaluated;
    }
}
exports.NotationDeliveryDto = NotationDeliveryDto;
//# sourceMappingURL=notation-delivery.dto.js.map