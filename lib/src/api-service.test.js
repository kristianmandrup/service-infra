"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const api_service_1 = require("./api-service");
ava_1.default('new ApiService', t => {
    const service = new api_service_1.ApiService('x');
    t.is(service.constructor, api_service_1.ApiService);
});
