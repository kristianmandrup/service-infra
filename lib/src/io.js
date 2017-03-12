"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GateWay {
    constructor() {
    }
    addStream(...names) {
        names.map(name => {
            this.streams.set(name, this.factory.createStream(name));
        });
        this.mergeAll();
    }
    mergeAll() {
        for (let stream of this.streams.values())
            stream.subscribe(this.stream);
    }
    removeStream(...names) {
        names.map(name => {
            this.streams.delete(name);
        });
        this.mergeAll();
    }
    removeAll() {
        for (let stream of this.streams.values()) {
            stream.unsubscribeAll();
        }
        this.streams.clear();
    }
    subscribe(observer, name) {
        return name ? this.streams.get(name).subscribe(observer) : this.stream.subscribe(observer);
    }
    getStream(name) {
        return this.streams.get(name);
    }
    emit(name, event) {
        this.getStream(name).emit(event);
    }
}
exports.GateWay = GateWay;
class Input extends GateWay {
    constructor() {
        super();
    }
}
exports.Input = Input;
class Output extends GateWay {
    constructor() {
        super();
    }
}
exports.Output = Output;
