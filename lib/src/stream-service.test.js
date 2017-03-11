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
const stream_service_1 = require("./stream-service");
const rxjs_1 = require("@reactivex/rxjs");
ava_1.default('new', t => {
    const service = new stream_service_1.StreamService('x');
    t.is(service.constructor, stream_service_1.StreamService);
});
ava_1.default('subscribe', (t) => __awaiter(this, void 0, void 0, function* () {
    const service = new stream_service_1.StreamService('x');
    const subscriber = new rxjs_1.Subscriber();
    const emitEvent = 1;
    service.subscribe(subscriber);
    service.emit(emitEvent);
    yield subscriber.next(event => {
        t.is(event, emitEvent);
    });
    t.is(service.constructor, stream_service_1.StreamService);
}));
