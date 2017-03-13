"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamService {
    constructor(name, opts) {
        this.name = name;
        this.configure(opts);
    }
    get stream() {
        return this.connector.stream;
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
    connect(service) {
        this.connector.connect(service);
    }
    connectAll(...services) {
        services.map(service => this.connect(service));
    }
    configure(opts) {
        this.connector.connect(this);
    }
}
exports.StreamService = StreamService;
