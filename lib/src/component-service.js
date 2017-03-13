"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class ComponentService extends service_1.Service {
    constructor(name) {
        super(name);
    }
    // TODO: ensure output and input streams are connected to backbone
    connectTo(appService) {
        appService.connect(this);
    }
}
exports.ComponentService = ComponentService;
