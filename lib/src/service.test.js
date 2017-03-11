"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const service_1 = require("./service");
ava_1.default(t => {
    const service = new service_1.Service();
    t.is(service.constructor, service_1.Service);
});
