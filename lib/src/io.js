"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GateWay {
    constructor(...streamNames) {
        this.streamsMap = new Map();
        this.addStream(...streamNames);
    }
    get streams() {
        return Array.from(this.streamsMap.values());
    }
    get streamNames() {
        return Array.from(this.streamsMap.keys());
    }
    hasNamedStream(name) {
        return this.streamNames.indexOf(name) >= 0;
    }
    streamsMatch(gateway) {
        return gateway.streamNames.every(name => this.hasNamedStream(name));
    }
    addStream(...names) {
        names.map(name => {
            this.setStream(name, this.stream.factory.createStream(name));
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
    constructor(...streams) {
        super(...streams);
    }
}
exports.Input = Input;
class Output extends GateWay {
    constructor(...streams) {
        super(...streams);
    }
}
exports.Output = Output;
