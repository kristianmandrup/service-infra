"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_service_1 = require("./stream-service");
const io_1 = require("./io");
class IOService extends stream_service_1.StreamService {
    // TODO: inject input and output
    constructor(name, io) {
        super(name);
        this.configure(io);
        console.log('IO service');
    }
    configure(io) {
        this.input = new io_1.Input(io.input);
        this.output = new io_1.Output(io.output);
    }
    plugin(service) {
        this.adapters.set(service.name, service);
    }
    unplug(name) {
        this.adapters.delete(name);
    }
}
exports.IOService = IOService;
