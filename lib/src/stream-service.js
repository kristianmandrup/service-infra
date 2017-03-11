"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StreamService = (function () {
    function StreamService() {
        this.configure();
    }
    StreamService.prototype.emit = function (event) {
        this.stream.emit(event);
    };
    StreamService.prototype.subscribe = function (subscriber) {
        this.stream.subscribe(subscriber);
    };
    StreamService.prototype.configure = function () {
        this.connector.connect(this);
    };
    return StreamService;
}());
exports.StreamService = StreamService;
