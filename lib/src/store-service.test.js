"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const store_service_1 = require("./store-service");
ava_1.default('new StoreService', t => {
    const service = new store_service_1.StoreService('x');
    t.is(service.constructor, store_service_1.StoreService);
});
