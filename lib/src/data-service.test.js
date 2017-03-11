"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const data_service_1 = require("./data-service");
ava_1.default(t => {
    const service = new data_service_1.DataService();
    t.is(service.constructor, data_service_1.DataService);
});
