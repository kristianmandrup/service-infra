"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const event_1 = require("./event");
ava_1.default(t => {
    const event = new event_1.Event('hello');
    t.is(event.constructor, event_1.Event);
});
