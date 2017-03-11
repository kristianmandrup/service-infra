"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connector {
    constructor() {
    }
    connect(...connectables) {
        connectables.map(connectable => {
            connectable;
        });
    }
}
exports.Connector = Connector;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Adapter {
    constructor() {
    }
    adapt(plug) {
    }
}
exports.Adapter = Adapter;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Plug {
    constructor() {
    }
    plugin(adapter) {
    }
}
exports.Plug = Plug;
