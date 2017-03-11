"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
Observable_1.Observable.of(1, 2, 3).map(function (x) { return x + '!!!'; });
