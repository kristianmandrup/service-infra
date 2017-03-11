"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var data_service_1 = require("./data-service");
ava_1.default(function (t) {
    var service = new data_service_1.DataService();
    t.is(service.constructor, data_service_1.DataService);
});
