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
    comfigureSockets(...types) {
        this.types = types;
    }
    plugFits(plug) {
        try {
            return this.sockets.get(plug.type);
        }
        catch (e) {
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
    }
    unplugOne(plug) {
        return this.eject(plug);
    }
    plugin(...plugs) {
        return plugs.every(plug => this.pluginOne(plug));
    }
    unplug(...plugs) {
        return plugs.every(plug => this.unplugOne(plug));
    }
}
exports.Adapter = Adapter;
