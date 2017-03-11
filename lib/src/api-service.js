"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var Connection = (function () {
    function Connection() {
    }
    Connection.prototype.connect = function () {
    };
    return Connection;
}());
var HttpConnection = (function (_super) {
    __extends(HttpConnection, _super);
    function HttpConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HttpConnection.prototype.connect = function () {
    };
    return HttpConnection;
}(Connection));
var SocketConnection = (function (_super) {
    __extends(SocketConnection, _super);
    function SocketConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocketConnection.prototype.connect = function () {
    };
    return SocketConnection;
}(Connection));
/*
 * Communicates with external systems
 * Kind of IO service
**/
var ApiService = (function (_super) {
    __extends(ApiService, _super);
    function ApiService() {
        var _this = _super.call(this) || this;
        _this.connection.connect();
        return _this;
    }
    return ApiService;
}(service_1.Service));
