"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connector = (function () {
    function Connector() {
    }
    Connector.prototype.connect = function () {
        var connectables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            connectables[_i] = arguments[_i];
        }
        connectables.map(function (connectable) {
            connectable;
        });
    };
    return Connector;
}());
exports.Connector = Connector;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
var Adapter = (function () {
    function Adapter() {
    }
    Adapter.prototype.adapt = function (plug) {
    };
    return Adapter;
}());
exports.Adapter = Adapter;
// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
var Plug = (function () {
    function Plug() {
    }
    Plug.prototype.plugin = function (adapter) {
    };
    return Plug;
}());
exports.Plug = Plug;
