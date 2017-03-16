"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const app_service_1 = require("./app-service");
ava_1.default('new AppService', t => {
    const service = new app_service_1.AppService('x');
    t.is(service.constructor, app_service_1.AppService);
});
