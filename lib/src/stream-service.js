"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamService {
    constructor(name, opts) {
        this.name = name;
        this.configure(opts);
    }
    emit(event) {
        this.stream.emit(event);
    }
    subscribe(subscriber) {
        this.stream.subscribe(subscriber);
    }
    configure(opts) {
        this.connector.connect(this);
    }
}
exports.StreamService = StreamService;
