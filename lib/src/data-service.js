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
var service_1 = require("./service");
var inversify_1 = require("inversify");
var DataService = (function (_super) {
    __extends(DataService, _super);
    // on Input
    // updates: Stream
    // on Output
    // updated: Stream
    // errors: Stream
    function DataService() {
        var _this = _super.call(this) || this;
        _this.configure();
        return _this;
    }
    DataService.prototype.configure = function () {
        this.input.subscribe(this);
        this.input.add('updates');
        this.output.add('updated', 'errors');
    };
    return DataService;
}(service_1.Service));
DataService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], DataService);
exports.DataService = DataService;
