"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("@reactivex/rxjs");
/*
 * Abstracted Stream, such as Observable
**/
class Stream {
    constructor(name) {
        this.name = name;
        this.source = new rxjs_1.Subject();
    }
    subscribe(subscriber) {
        this.subscriptions.set(subscriber.name, this.source.subscribe(subscriber));
    }
    unsubscribe(name) {
        this.subscriptions.get(name).unsubscribe();
    }
    unsubscribeAll() {
        for (let key of this.subscriptions.keys()) {
            this.unsubscribe(key);
        }
    }
    emit(event) {
        this.source.next(event);
    }
}
exports.Stream = Stream;
class StreamFactory {
    createStream(name) {
        return new Stream(name);
    }
}
exports.StreamFactory = StreamFactory;
