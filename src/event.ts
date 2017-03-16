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
  protected msg: IEvent
  protected idFactory: EventIdFactory

  constructor(name: string, opts = {}) {
    this.idFactory = new EventIdFactory()

    this.msg = Object.assign({
      id: this.idFactory.create(),
      createdAt: new Date(),
      name: name
    }, opts)
  }
}