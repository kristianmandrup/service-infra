"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slot {
}
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Adapter {
    constructor(name, service) {
        this.name = name;
        this.service = service;
        this.sockets = new Map();
    }
    configSockets(...types) {
        this.types = types;
    }
    pluggedIn() {
        return this.sockets.keys();
    }
    isPluggedIn(type) {
        return Array.from(this.sockets.keys()).indexOf(type) >= 0;
    }
    plugFits(plug) {
        try {
            if (this.types.indexOf(plug.type) >= 0)
                return true;
        }
        catch (e) {
            // console.log(e)
            return false;
        }
    }
    inject(plug) {
        this.sockets.set(plug.type, plug);
    }
    eject(plug) {
        return this.sockets.delete(plug.type);
    }
    pluginOne(plug) {
        if (!this.plugFits(plug))
            return false;
        this.inject(plug);
        return true;
    }
    unplugOne(plug) {
        return this.eject(plug);
    }
    plugin(...plugs) {
        return plugs.every(plug => {
            return this.pluginOne(plug);
        });
    }
    unplug(...plugs) {
        return plugs.every(plug => this.unplugOne(plug));
    }
}
exports.Adapter = Adapter;
