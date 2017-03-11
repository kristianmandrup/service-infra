"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_service_1 = require("./stream-service");
class IOService extends stream_service_1.StreamService {
    // TODO: inject input and output
    constructor(name) {
        super(name);
        console.log('IO service');
    }
    plugin(service) {
        this.adapters.set(service.name, service);
    }
    unplug(name) {
        this.adapters.delete(name);
    }
}
exports.IOService = IOService;
