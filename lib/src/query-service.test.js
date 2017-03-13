"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const query_service_1 = require("./query-service");
ava_1.default('new QueryService', t => {
    const service = new query_service_1.QueryService('x');
    t.is(service.constructor, query_service_1.QueryService);
});
