"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const rxjs_1 = require("@reactivex/rxjs");
ava_1.default('playing with streams', t => {
    const observable = rxjs_1.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    });
    const subscription = observable.subscribe(value => console.log(value), err => { }, () => console.log('this is the end'));
});
