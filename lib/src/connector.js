"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("./stream");
class Connector {
    constructor(name, observable) {
        this._stream = new stream_1.Stream(name, observable);
    }
    isConnected(name) {
        return Array.from(this.connected.keys()).includes(name);
    }
    get stream() {
        return this.stream;
    }
    emit(event) {
        this.stream.emit(event);
    }
    subscribe(subscriber) {
        return this.stream.subscribe(subscriber);
    }
    unsubscribe(subscriber) {
        this.stream.unsubscribe(subscriber);
    }
    // TODO: connect by concat of streams or
    // some other way ensuring that events from each source
    // stream flows into connected target stream
    connect(...connectables) {
        connectables.map(connectable => {
            this.connected.set(connectable.name, connectable);
        });
    }
    disconnect(...names) {
    }
}
exports.Connector = Connector;
