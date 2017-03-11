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
var GateWay = (function () {
    function GateWay() {
    }
    GateWay.prototype.add = function () {
        var _this = this;
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        names.map(function (name) { return _this.streamer.createFrom(name); });
    };
    GateWay.prototype.remove = function (name) {
        this.streamer.remove(name);
    };
    GateWay.prototype.subscribe = function (observer) {
    };
    return GateWay;
}());
exports.GateWay = GateWay;
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super.call(this) || this;
    }
    return Input;
}(GateWay));
exports.Input = Input;
var Output = (function (_super) {
    __extends(Output, _super);
    function Output() {
        return _super.call(this) || this;
    }
    return Output;
}(GateWay));
exports.Output = Output;
