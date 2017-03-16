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
  public create() {
    return generateQuickGuid()
  }
}

export class Event {
  protected _msg: IEvent
  static idFactory: EventIdFactory

  get idFactory() {
    return Event.idFactory || new EventIdFactory()
  }

  get msg() {
    return this._msg
  }

  constructor(name: string, opts = {}) {
    this._msg = Object.assign({
      id: this.idFactory.create(),
      createdAt: new Date(),
      name: name
    }, opts)
  }
}