export interface IEvent {
  name: String
  id: String
  createdAt: Date
}

function generateQuickGuid() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
}

class EventIdFactory {
  create() {
    return generateQuickGuid()
  }
}

export class Event {
  protected msg: IEvent
  protected idFactory: EventIdFactory

  constructor(name, opts = {}) {
    this.msg = {
      id: this.idFactory.create(),
      createdAt: new Date(),
      name: name
    }
  }
}