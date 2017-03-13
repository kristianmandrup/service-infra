"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Plug {
    constructor(type, service) {
        this.type = type;
        this.service = service;
    }
    plugsInto(adapter) {
        try {
            return adapter.plugFits(this);
        }
        catch (e) {
            return false;
        }
    }
    plugin(adapter) {
        try {
            const result = adapter.plugin(this);
            if (result) {
                this.inAdapter = adapter;
            }
            return result;
        }
        catch (e) {
            return false;
        }
    }
}
exports.Plug = Plug;
