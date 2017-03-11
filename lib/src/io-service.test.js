"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const io_service_1 = require("./io-service");
ava_1.default(t => {
    const service = new io_service_1.IOService();
    t.is(service.constructor, io_service_1.IOService);
});
