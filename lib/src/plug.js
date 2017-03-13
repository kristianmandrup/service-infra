"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./adapter");
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Plug extends adapter_1.Adaptable {
    constructor(type, service) {
        super(service);
        this._type = type;
    }
    get inAdapter() {
        return this._adapter;
    }
    get type() {
        return this._type;
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
                this._adapter = adapter;
            }
            return result;
        }
        catch (e) {
            return false;
        }
    }
}
exports.Plug = Plug;
