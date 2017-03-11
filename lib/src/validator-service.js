"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class ValidatorService extends service_1.Service {
    constructor(name) {
        super('validator:' + name);
    }
    configure() {
        this.input.subscribe(this);
        this.input.addStream('data');
        this.output.addStream('valid', 'invalid');
        // this.input.subscribe('data', this.validate)
    }
    validate(data) {
        let valid = this.isValid(data);
        valid ? this.emit('valid', data, valid) : this.emit('invalid', data, valid);
    }
    isValid(data) {
        return true;
    }
    emit(name, data, validity) {
        this.out.emit(name, { valid: validity, data });
    }
}
exports.ValidatorService = ValidatorService;
