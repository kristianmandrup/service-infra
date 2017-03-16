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
const validator_service_1 = require("./validator-service");
const connector_1 = require("../connector");
const rxjs_1 = require("@reactivex/rxjs");
ava_1.default('new', t => {
    const service = new validator_service_1.ValidatorService('x');
    t.is(service.constructor, validator_service_1.ValidatorService);
});
ava_1.default('connect', t => {
    const service = new validator_service_1.ValidatorService('x');
    const _service = new validator_service_1.ValidatorService('y');
    service.connect(_service);
    t.truthy(service.isConnected('y'));
});
ava_1.default('disconnect', t => {
    const service = new StreamService('x');
    t.is(service.connector, connector_1.Connector);
});
ava_1.default('subscribe', (t) => __awaiter(this, void 0, void 0, function* () {
    const service = new StreamService('x');
    const subscriber = new rxjs_1.Subscriber();
    const subscription = service.subscribe(subscriber);
    t.is(subscription.constructor, rxjs_1.Subscription);
}));
ava_1.default('emit', (t) => __awaiter(this, void 0, void 0, function* () {
    const service = new StreamService('x');
    const subscriber = new rxjs_1.Subscriber();
    const emitEvent = 1;
    service.emit(emitEvent);
    yield subscriber.next(event => {
        t.is(event, emitEvent);
    });
    t.is(service.constructor, StreamService);
}));
