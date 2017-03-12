"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamService {
    constructor(name, opts) {
        this.name = name;
        this.configure(opts);
    }
    emit(event) {
        this.connector.emit(event);
    }
    subscribe(subscriber) {
        return this.connector.subscribe(subscriber);
    }
    unsubscribe(subscriber) {
        this.connector.unsubscribe(subscriber);
    }
    configure(opts) {
        this.connector.connect(this);
    }
}
exports.StreamService = StreamService;
