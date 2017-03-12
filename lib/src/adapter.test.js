"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const service_1 = require("./service");
const adapter_1 = require("./adapter");
const service = new service_1.Service('a');
const adapter = new adapter_1.Adapter('x', service);
ava_1.default('new Adapter', t => {
    t.is(adapter.constructor, adapter_1.Adapter);
});
ava_1.default('plugin no plug fails', t => {
    const plug = null;
    t.falsy(adapter.plugin(plug));
});
// test('plugin a bad Plug fails', t => {
//   const plug = new Plug('a')
//   t.falsy(adapter.plugin(plug))
// })
// test('plugin a Plug in matching socket works', t => {
//   const plug = new Plug('x')
//   t.truthy(adapter.plugin(plug))
// })
