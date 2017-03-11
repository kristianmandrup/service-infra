"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_service_1 = require("./store-service");
class CacheService extends store_service_1.StoreService {
    constructor() {
        super();
    }
    configure() {
        this.input.subscribe(this);
        this.input.add('requests');
        this.output.add('miss', 'hit');
    }
}
exports.CacheService = CacheService;
