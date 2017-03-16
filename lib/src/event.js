"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateQuickGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}
class EventIdFactory {
    create() {
        return generateQuickGuid();
    }
}
class Event {
    get idFactory() {
        return Event.idFactory || new EventIdFactory();
    }
    get msg() {
        return this._msg;
    }
    constructor(name, opts = {}) {
        this._msg = Object.assign({
            id: this.idFactory.create(),
            createdAt: new Date(),
            name: name
        }, opts);
    }
}
exports.Event = Event;
