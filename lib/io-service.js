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
var stream_service_1 = require("./stream-service");
var IOService = (function (_super) {
    __extends(IOService, _super);
    // TODO: inject input and output
    function IOService() {
        var _this = _super.call(this) || this;
        console.log('IO service');
        return _this;
    }
    IOService.prototype.plugin = function (service) {
    };
    return IOService;
}(stream_service_1.StreamService));
exports.IOService = IOService;
