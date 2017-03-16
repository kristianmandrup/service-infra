"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const data_service_1 = require("./data-service");
const io_1 = require("./io");
ava_1.default('new', t => {
    const service = new data_service_1.DataService('x');
    t.is(service.constructor, data_service_1.DataService);
    t.is(service.input.constructor, io_1.Input);
});
