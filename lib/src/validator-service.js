"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class ValidatorService extends service_1.Service {
    constructor() {
        super();
    }
    configure() {
        this.data.subscribe(this.validate);
    }
    validate(data) {
        this.isValid(data) ? this.addValid(data) : this.addInValid(data);
    }
    isValid(data) {
        return true;
    }
    addValid(data) {
        this.valid.emit({ valid: true, data });
    }
}
exports.ValidatorService = ValidatorService;
