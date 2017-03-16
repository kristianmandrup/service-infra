"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const io_service_1 = require("./io-service");
const io_1 = require("./io");
ava_1.default('new', t => {
    const service = new io_service_1.IOService('x');
    t.is(service.constructor, io_service_1.IOService);
});
ava_1.default('Input', t => {
    const service = new io_service_1.IOService('x');
    t.is(service.input.constructor, io_1.Input);
});
ava_1.default('Output', t => {
    const service = new io_service_1.IOService('x');
    t.is(service.output.constructor, io_1.Output);
});
