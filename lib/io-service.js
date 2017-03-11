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
var inversify_1 = require("inversify");
var rxjs_1 = require("@reactivex/rxjs");
var Stream = (function () {
    function Stream() {
        this.observer = rxjs_1.Observable.range(1, 5);
    }
    return Stream;
}());
var Streamer = (function () {
    // stream: Stream
    function Streamer() {
    }
    return Streamer;
}());
Streamer = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Streamer);
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super.call(this) || this;
    }
    return Input;
}(Streamer));
var Output = (function (_super) {
    __extends(Output, _super);
    function Output() {
        return _super.call(this) || this;
    }
    return Output;
}(Streamer));
var IOService = (function () {
    // TODO: inject input and output
    function IOService() {
        console.log('IO service');
    }
    return IOService;
}());
exports.IOService = IOService;
//# sourceMappingURL=io-service.js.map