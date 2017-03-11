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
// @injectable()
var Streamer = (function () {
    // stream: Stream
    function Streamer() {
    }
    Streamer.prototype.add = function (name, stream) {
        this.streams.set(name, stream);
    };
    Streamer.prototype.remove = function (name) {
        this.streams.delete(name);
    };
    return Streamer;
}());
exports.Streamer = Streamer;
var GateWay = (function () {
    function GateWay() {
    }
    GateWay.prototype.add = function (name, stream) {
        this.streamer.add(name, stream);
    };
    GateWay.prototype.remove = function (name) {
        this.streamer.remove(name);
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
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
var Adapter = (function () {
    function Adapter() {
    }
    Adapter.prototype.adapt = function (plug) {
    };
    return Adapter;
}());
exports.Adapter = Adapter;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
var Plug = (function () {
    function Plug() {
    }
    Plug.prototype.plugin = function (adapter) {
    };
    return Plug;
}());
exports.Plug = Plug;
