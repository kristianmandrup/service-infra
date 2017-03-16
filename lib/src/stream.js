"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamFactory {
    createStream(name, eventSource) {
        return new Stream(name, eventSource);
    }
}
exports.StreamFactory = StreamFactory;
function* entries(obj) {
    for (let key in obj)
        yield [key, obj[key]];
}
/*
 * Abstracted Stream, such as Observable
**/
class Stream {
    constructor(name, eventSource) {
        this._name = name;
        this._source = eventSource;
        this.subscriptions = new Map();
    }
    get name() {
        return this._name;
    }
    get source() {
        return this._source;
    }
    get factory() {
        return Stream.factory;
    }
    // todo: allow name/function or object key/value?
    subscribeOne(name, subscriber) {
        if (!subscriber) {
            throw 'Subscriber must have a name';
        }
        const subscription = this.source.subscribe(subscriber);
        this.subscriptions.set(name, subscriber);
        return subscription;
    }
    subscribeObj(subscribers) {
        for (let name in subscribers) {
            let subscriber = subscribers[name];
            this.subscribeOne(name, subscriber);
        }
    }
    subscribeMap(subscribers) {
        subscribers.forEach((subscriber, name) => {
            this.subscribeOne(name, subscriber);
        });
    }
    subscribe(subscribers) {
        if (subscribers instanceof Map)
            return this.subscribeMap(subscribers);
        if (subscribers instanceof Object)
            return this.subscribeObj(subscribers);
        throw `Invalid subscribers #{type}`;
    }
    subscription(name) {
        return this.subscriptions.get(name);
    }
    unsubscribe(name) {
        const subscription = this.subscription(name);
        return subscription ? subscription.unsubscribe() : false;
    }
    unsubscribeAll() {
        for (let key of this.subscriptions.keys()) {
            this.unsubscribe(key);
        }
    }
}
Stream.factory = new StreamFactory();
exports.Stream = Stream;
