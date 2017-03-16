"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const event_1 = require("../event");
class ValidatorService extends service_1.Service {
    constructor(name = 'validator', io) {
        super('validator:' + name, io);
    }
    configure() {
        this.input.addStream('data');
        this.output.addStream('valid', 'invalid');
    }
    validate(data) {
        let valid = this.isValid(data);
        valid ? this.emitResult('valid', data, valid) : this.emitResult('invalid', data, valid);
    }
    isValid(data) {
        return true;
    }
    event(name, data, valid) {
        return new event_1.Event(name, { valid, data }).msg;
    }
    emitResult(name, data, valid) {
        const event = this.event(name, data, valid);
        this.output.emit(name, event);
    }
}
exports.ValidatorService = ValidatorService;
