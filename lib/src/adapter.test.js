"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const adapter_1 = require("./adapter");
const plug_1 = require("./plug");
ava_1.default('new Adapter', t => {
    const adapter = new adapter_1.Adapter('x');
    t.is(adapter.constructor, adapter_1.Adapter);
});
ava_1.default('plugin no plug fails', t => {
    const adapter = new adapter_1.Adapter('x');
    const plug = null;
    t.falsy(adapter.plugin(plug));
});
ava_1.default('plugin a bad Plug fails', t => {
    const adapter = new adapter_1.Adapter('x');
    const plug = new plug_1.Plug('a');
    t.falsy(adapter.plugin(plug));
});
ava_1.default('plugin a Plug in matching socket works', t => {
    const adapter = new adapter_1.Adapter('x');
    const plug = new plug_1.Plug('x');
    t.truthy(adapter.plugin(plug));
});
