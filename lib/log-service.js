"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_service_1 = require("./store-service");
var LogService = (function (_super) {
    __extends(LogService, _super);
    function LogService() {
        return _super.call(this) || this;
    }
    return LogService;
}(store_service_1.StoreService));
exports.LogService = LogService;
//# sourceMappingURL=log-service.js.map