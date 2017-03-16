"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
// import { Container, injectable, inject } from 'inversify'
// @injectable()
class DataService extends service_1.Service {
    constructor(name) {
        super(name);
        this.configure();
    }
    configure() {
        this.input.subscribe(this);
        this.input.addStream('updates');
        this.output.addStream('updated', 'errors');
    }
}
exports.DataService = DataService;
