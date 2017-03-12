"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Plug {
    constructor(type) {
        this.type = type;
    }
    plugin(adapter) {
        return adapter.plugin(this);
    }
}
exports.Plug = Plug;
