"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const stream_1 = require("./stream");
const event_1 = require("./event");
const rxjs_1 = require("@reactivex/rxjs");
const subscriber = rxjs_1.Subscriber.create((x) => {
    console.log('event', x);
});
const eventGenerator = rxjs_1.Observable.interval(500).map(index => {
    return new event_1.Event({ type: 'counter', number: index });
});
ava_1.default('new', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    t.is(stream.constructor, stream_1.Stream);
});
ava_1.default('subscribeOne - invalid name', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    // error since no name
    stream.subscribeOne(null, subscriber);
});
ava_1.default('subscribeOne - valid name', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    // good subscriber with name
    stream.subscribeOne('a', subscriber);
});
ava_1.default('subscribe - Object', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    const subscribers = {
        a: subscriber,
        b: subscriber
    };
    stream.subscribe(subscribers);
});
ava_1.default('subscribe - Map', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    const subscribers = new Map();
    subscribers.set('a', subscriber);
    subscribers.set('b', subscriber);
    stream.subscribe(subscribers);
});
ava_1.default('unsubscribe - uknown name', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    stream.subscribeOne('a', subscriber);
    // error since no such name
    stream.unsubscribe('unknown');
});
ava_1.default('unsubscribe - existing name', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    stream.subscribeOne('a', subscriber);
    // correct name
    stream.unsubscribe('a');
});
ava_1.default('unsubscribeAll - none', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
ava_1.default('unsubscribeAll - one', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    stream.subscribeOne('a', subscriber);
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
ava_1.default('unsubscribeAll - two', t => {
    const stream = new stream_1.Stream('x', eventGenerator);
    const subscribers = {
        a: subscriber,
        b: subscriber
    };
    stream.subscribe(subscribers);
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
