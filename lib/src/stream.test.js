"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const stream_1 = require("./stream");
const event_1 = require("./event");
const rxjs_1 = require("@reactivex/rxjs");
function testSubscriber(t) {
    return rxjs_1.Subscriber.create((event) => {
        console.log('event', event);
        t.is(event.type, 'count');
    });
}
function createEvent(index = 1) {
    return new event_1.Event('counter', { type: 'count', number: index });
}
const eventGenerator = rxjs_1.Observable.range(1, 2).map(index => {
    console.log('new event', index);
    return createEvent(index).msg;
});
function createStream(name = 'x') {
    // return new Stream(name, eventGenerator)
    return new stream_1.Stream(name);
}
ava_1.default('new', t => {
    const stream = createStream();
    t.is(stream.constructor, stream_1.Stream);
});
ava_1.default('subscribeOne - invalid name', (t) => __awaiter(this, void 0, void 0, function* () {
    const stream = createStream();
    // error since no name
    stream.subscribeOne(null, testSubscriber(t));
}));
ava_1.default('subscribeOne - valid name', (t) => __awaiter(this, void 0, void 0, function* () {
    const stream = createStream();
    // good subscriber with name
    stream.subscribeOne('a', testSubscriber(t));
}));
ava_1.default('subscribe - Object', t => {
    const stream = createStream();
    const subscribers = {
        a: testSubscriber(t),
        b: testSubscriber(t)
    };
    stream.subscribe(subscribers);
    stream.emit(createEvent().msg);
});
ava_1.default('subscribe - Map', t => {
    const stream = createStream();
    const subscribers = new Map();
    subscribers.set('a', testSubscriber(t));
    subscribers.set('b', testSubscriber(t));
    stream.subscribe(subscribers);
});
ava_1.default('unsubscribe - uknown name', t => {
    const stream = createStream();
    stream.subscribeOne('a', testSubscriber(t));
    // error since no such name
    stream.unsubscribe('unknown');
});
ava_1.default('unsubscribe - existing name', t => {
    const stream = createStream();
    stream.subscribeOne('a', testSubscriber(t));
    // correct name
    stream.unsubscribe('a');
});
ava_1.default('unsubscribeAll - none', t => {
    const stream = createStream();
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
ava_1.default('unsubscribeAll - one', t => {
    const stream = createStream();
    stream.subscribeOne('a', testSubscriber(t));
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
ava_1.default('unsubscribeAll - two', t => {
    const stream = createStream();
    const subscribers = {
        a: testSubscriber(t),
        b: testSubscriber(t)
    };
    stream.subscribe(subscribers);
    // no subscribers to unsubscribe
    stream.unsubscribeAll();
});
