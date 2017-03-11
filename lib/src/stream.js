"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("@reactivex/rxjs");
/*
 * Abstracted Stream, such as Observable
**/
var Stream = (function () {
    function Stream(name) {
        this.name = name;
        this.source = new rxjs_1.Subject();
    }
    Stream.prototype.subscribe = function (subscriber) {
        this.source.subscribe(subscriber);
    };
    Stream.prototype.emit = function (event) {
        this.source.next(1);
    };
    return Stream;
}());
exports.Stream = Stream;
// @injectable()
var Streamer = (function () {
    // stream: Stream
    function Streamer() {
    }
    Streamer.prototype.createStream = function (name) {
        return new Stream(name);
    };
    Streamer.prototype.createFrom = function (name) {
        this.add(this.createStream(name));
    };
    Streamer.prototype.add = function (stream) {
        this.streams.set(stream.name, stream);
    };
    Streamer.prototype.remove = function (name) {
        this.streams.delete(name);
    };
    return Streamer;
}());
exports.Streamer = Streamer;
