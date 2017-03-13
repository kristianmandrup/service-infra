"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_service_1 = require("./io-service");
// @injectable()
class Service extends io_service_1.IOService {
    constructor(name, io = {}) {
        super(name, io);
        console.log('service');
    }
}
exports.Service = Service;
