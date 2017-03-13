"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const service_1 = require("./service");
const adapter_1 = require("./adapter");
const plug_1 = require("./plug");
const service = new service_1.Service('a');
const plug = new plug_1.Plug('b', service);
const badAdapter = new adapter_1.Adapter('bad', service);
const goodAdapter = new adapter_1.Adapter('good', service);
goodAdapter.configSockets('a', 'b');
ava_1.default('new Plug', t => {
    t.is(plug.constructor, plug_1.Plug);
});
ava_1.default('plugsInto null fails', t => {
    t.falsy(plug.plugsInto(null));
});
ava_1.default('plugsInto bad adapter fails', t => {
    t.falsy(plug.plugsInto(badAdapter));
});
ava_1.default('plugsInto matching plug works', t => {
    t.truthy(plug.plugsInto(goodAdapter));
});
ava_1.default('plugin no plug fails', t => {
    t.falsy(plug.plugin(null));
});
ava_1.default('plugin a bad Plug fails', t => {
    t.falsy(plug.plugin(badAdapter));
    t.falsy(plug.inAdapter === badAdapter);
});
ava_1.default('plugin a Plug in matching socket works', t => {
    t.truthy(plug.plugin(goodAdapter));
    t.is(plug.inAdapter, goodAdapter);
});
