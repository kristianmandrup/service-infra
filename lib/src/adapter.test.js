"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const service_1 = require("./service");
const adapter_1 = require("./adapter");
const plug_1 = require("./plug");
const service = new service_1.Service('a');
const adapter = new adapter_1.Adapter(service);
adapter.configSockets('a', 'b');
const badPlug = new plug_1.Plug('_', service);
const goodPlug = new plug_1.Plug('b', service);
ava_1.default('new Adapter', t => {
    t.is(adapter.constructor, adapter_1.Adapter);
});
ava_1.default('plugFits null fails', t => {
    t.falsy(adapter.plugFits(null));
});
ava_1.default('plugFits bad plug fails', t => {
    const plug = null;
    t.falsy(adapter.plugFits(badPlug));
});
ava_1.default('plugFits matching plug works', t => {
    const plug = null;
    t.truthy(adapter.plugFits(goodPlug));
});
ava_1.default('plugin no plug fails', t => {
    const plug = null;
    t.falsy(adapter.plugin(plug));
});
ava_1.default('plugin a bad Plug fails', t => {
    t.falsy(adapter.plugin(badPlug));
});
ava_1.default('plugin a Plug in matching socket works', t => {
    t.truthy(adapter.plugin(goodPlug));
});
