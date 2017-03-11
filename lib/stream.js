"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("@reactivex/rxjs");
var Stream = (function () {
    function Stream() {
        this.observer = rxjs_1.Observable.range(1, 5);
    }
    return Stream;
}());
exports.Stream = Stream;
//# sourceMappingURL=stream.js.map