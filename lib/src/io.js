"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("./stream");
class GateWay {
    constructor(factory) {
        this.streamsMap = new Map();
        this.factory = factory || new stream_1.StreamFactory();
    }
    get streams() {
        return Array.from(this.streams.values());
    }
    addStream(...names) {
        names.map(name => {
            this.setStream(name, this.factory.createStream(name));
        });
        this.mergeAll();
    }
    mergeAll() {
        this.streams.map(stream => stream.subscribe(this.stream));
    }
    removeStream(...names) {
        names.map(name => {
            this.deleteStream(name);
        });
        this.mergeAll();
    }
    removeAll() {
        this.streams.map(stream => stream.unsubscribeAll());
        this.streamsMap.clear();
    }
    subscribe(observer, name) {
        return name ? this.findStream(name).subscribe(observer) : this.stream.subscribe(observer);
    }
    setStream(name, stream) {
        this.streamsMap.set(name, stream);
    }
    deleteStream(name) {
        this.streamsMap.delete(name);
    }
    findStream(name) {
        return this.streamsMap.get(name);
    }
    emit(name, event) {
        this.findStream(name).emit(event);
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
