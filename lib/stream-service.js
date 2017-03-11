"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connector = (function () {
    function Connector() {
    }
    Connector.prototype.connect = function (service) {
    };
    Connector.prototype.connectAll = function (connectables) {
        connectables.map(function (connectable) {
            connectable;
        });
    };
    return Connector;
}());
var StreamService = (function () {
    function StreamService() {
    }
    StreamService.prototype.subscribe = function (subscriber) {
        this.stream.subscribe(subscriber);
    };
    StreamService.prototype.configure = function () {
        this.connector.connect(this);
    };
    return StreamService;
}());
exports.StreamService = StreamService;
