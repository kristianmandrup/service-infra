// Stream using AsyncSubject
// Useful for async operations such as an Ajax request
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("./stream");
class AsyncStream extends stream_1.Stream {
    constructor(name, eventSource) {
        super(name, eventSource);
    }
}
exports.AsyncStream = AsyncStream;
