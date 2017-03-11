"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var io_service_1 = require("./io-service");
ava_1.default(function (t) {
    var service = new io_service_1.IOService();
    t.is(service.constructor, io_service_1.IOService);
});
