"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamDeliveryDto = void 0;
const deliveries_dto_1 = require("./deliveries.dto");
const notation_delivery_dto_1 = require("./notation-delivery.dto");
class TeamDeliveryDto {
    constructor(teamDeliveryDb) {
        var _a, _b, _c;
        this.id = teamDeliveryDb._id;
        if ((_a = teamDeliveryDb.delivery) === null || _a === void 0 ? void 0 : _a._id) {
            this.delivery = new deliveries_dto_1.DeliveriesDto(teamDeliveryDb.delivery);
        }
        this.filesPath = teamDeliveryDb.filesPath;
        this.lastUpdateUnixTime = teamDeliveryDb.lastUpdateUnixTime;
        this.lastUploaderUserId = teamDeliveryDb.lastUploaderUserId;
        if (((_b = teamDeliveryDb.notation) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
            ((_c = teamDeliveryDb.notation[0]) === null || _c === void 0 ? void 0 : _c._id)) {
            this.notation = teamDeliveryDb.notation.map((n) => new notation_delivery_dto_1.NotationDeliveryDto(n));
        }
    }
}
exports.TeamDeliveryDto = TeamDeliveryDto;
//# sourceMappingURL=team-delivery.dto.js.map