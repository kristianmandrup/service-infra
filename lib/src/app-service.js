"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
/*
 * Communicates with external systems
 * Kind of IO service
**/
class AppService extends service_1.Service {
    get backbone() {
        return this.stream;
    }
    constructor(name, ...connectables) {
        super(name);
        this.connector.connect(...connectables);
    }
}
exports.AppService = AppService;
