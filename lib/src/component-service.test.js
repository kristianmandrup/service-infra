"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const component_service_1 = require("./component-service");
ava_1.default('new ComponentService', t => {
    const service = new component_service_1.ComponentService('x');
    t.is(service.constructor, component_service_1.ComponentService);
});
