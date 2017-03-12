"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("./stream");
class Connector {
    constructor(name) {
        this.stream = new stream_1.Stream(name);
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
    connect(...connectables) {
        connectables.map(connectable => {
            this.connected.set(connectable.name, connectable);
        });
    }
    disconnect(...names) {
    }
}
exports.Connector = Connector;
