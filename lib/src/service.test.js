"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var service_1 = require("./service");
ava_1.default(function (t) {
    var service = new service_1.Service();
    t.is(service.constructor, service_1.Service);
});
