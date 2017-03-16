"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const service_1 = require("./service");
function createService(name, input, output) {
    return new service_1.Service(name, { input, output });
}
const service = createService('subject', ['y'], ['x']);
const targetService = {
    compatible: createService('compatible', ['x'], ['y']),
    incompatible: createService('incompatible', ['x'], ['a'])
};
ava_1.default('new Service', t => {
    t.is(service.constructor, service_1.Service);
});
ava_1.default('connect Service to incompatible Service', t => {
    const service = new service_1.Service('z');
    t.is(service.constructor, service_1.Service);
});
ava_1.default('connect Service to compatible Service', t => {
    const service = new service_1.Service('z');
    const compatibleService = new service_1.Service('z');
    t.is(service.constructor, service_1.Service);
});
ava_1.default('connect Service to compatible Service', t => {
    const service = new service_1.Service('z');
    t.is(service.constructor, service_1.Service);
});
