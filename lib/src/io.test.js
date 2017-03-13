"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const io_1 = require("./io");
ava_1.default('new', t => {
    const input = new io_1.Input();
    t.is(input.constructor, io_1.Input);
});
ava_1.default('Input.getStream no such stream', t => {
    const input = new io_1.Input();
    t.falsy(input.findStream('updated'));
});
ava_1.default('Input.addStream', t => {
    const input = new io_1.Input();
    const name = 'my-stream';
    input.addStream(name);
    t.truthy(input.findStream(name));
});
ava_1.default('Output.getStream no such stream', t => {
    const output = new io_1.Output();
    t.falsy(output.findStream('updated'));
});
ava_1.default('Output.addStream', t => {
    const output = new io_1.Output();
    output.addStream('updated');
    const name = 'my-stream';
    output.addStream(name);
    t.truthy(output.findStream(name));
});
ava_1.default('Output.removeStream no such stream', t => {
    const output = new io_1.Output();
    t.notThrows(() => { output.removeStream('updated'); });
});
ava_1.default('Output.removeStream find stream', t => {
    const output = new io_1.Output();
    const name = 'my-stream';
    output.addStream(name);
    output.removeStream('updated');
    t.falsy(output.findStream(name));
});
ava_1.default('Output.removeAll no such stream', t => {
    const output = new io_1.Output();
    t.notThrows(() => { output.removeAll(); });
});
ava_1.default('Output.removeAll with streams', t => {
    const output = new io_1.Output();
    output.addStream('x', 'y');
    t.falsy(output.findStream('x'));
    t.falsy(output.findStream('y'));
});
