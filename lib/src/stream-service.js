"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StreamService = (function () {
    function StreamService(name, opts) {
        this.name = name;
        this.configure(opts);
    }
    StreamService.prototype.emit = function (event) {
        this.stream.emit(event);
    };
    StreamService.prototype.subscribe = function (subscriber) {
        this.stream.subscribe(subscriber);
    };
    StreamService.prototype.configure = function (opts) {
        this.connector.connect(this);
    };
    return StreamService;
}());
exports.StreamService = StreamService;
