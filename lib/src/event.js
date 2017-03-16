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
    constructor(name, opts = {}) {
        this.idFactory = new EventIdFactory();
        this.msg = Object.assign({
            id: this.idFactory.create(),
            createdAt: new Date(),
            name: name
        }, opts);
    }
}
exports.Event = Event;
