"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adaptable {
    constructor(service) {
        this._service = service;
    }
    get service() {
        return this._service;
    }
    get input() {
        return this._service.input;
    }
    get output() {
        return this._service.output;
    }
}
exports.Adaptable = Adaptable;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Adapter extends Adaptable {
    constructor(service) {
        super(service);
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
    streamsMatch(plug) {
        return this.input.streamsMatch(plug.output) && plug.input.streamsMatch(this.output);
    }
    // TODO:
    // since the plug is used to connect one service into another, it is really all about
    // connecting matching input/output streams
    // so perhaps no use for the types list except as a convenience
    // also when we plug a service into another, the matching streams must be connected
    plugFits(plug) {
        try {
            if (this.types.indexOf(plug.type) >= 0) {
                return this.streamsMatch(plug);
            }
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
