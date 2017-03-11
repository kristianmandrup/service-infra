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
const service_1 = require("./service");
const inversify_1 = require("inversify");
let DataService = class DataService extends service_1.Service {
    // on Input
    // updates: Stream
    // on Output
    // updated: Stream
    // errors: Stream
    constructor() {
        super();
        this.configure();
    }
    configure() {
        this.input.subscribe(this);
        this.input.add('updates');
        this.output.add('updated', 'errors');
    }
};
DataService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], DataService);
exports.DataService = DataService;
