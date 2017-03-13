"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const log_service_1 = require("./log-service");
ava_1.default('new LogService', t => {
    const service = new log_service_1.LogService('x');
    t.is(service.constructor, log_service_1.LogService);
});
