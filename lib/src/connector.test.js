"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const connector_1 = require("./connector");
ava_1.default('new Connector', t => {
    const connector = new connector_1.Connector('x');
    t.is(connector.constructor, connector_1.Connector);
});
