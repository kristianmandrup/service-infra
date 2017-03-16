"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class Connection {
    connect() {
    }
}
class HttpConnection extends Connection {
    connect() {
    }
}
class SocketConnection extends Connection {
    connect() {
    }
}
/*
 * Communicates with external systems
 * Kind of IO service
**/
class ApiService extends service_1.Service {
    constructor(name) {
        super(name);
        this.connection.connect();
    }
}
exports.ApiService = ApiService;
