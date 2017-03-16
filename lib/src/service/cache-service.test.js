"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const cache_service_1 = require("./cache-service");
ava_1.default('new CacheService', t => {
    const service = new cache_service_1.CacheService('x');
    t.is(service.constructor, cache_service_1.CacheService);
});
