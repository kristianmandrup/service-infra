import { Stream } from './stream'
import { Adapter } from './util'

interface Connectable {
}

class Connector {
  constructor() {

  }

  connect(service: StreamService) {
  }

  connectAll(connectables: Connectable[]) {
    connectables.map(connectable => {
      connectable
    })
  }
}

export class StreamService {
  protected stream: Stream
  protected connector: Connector

  // list of adapters? named adapters in a Set?
  private adapters: Adapter[]

  constructor() {
  }

  subscribe(subscriber) {
    this.stream.subscribe(subscriber)
  }

  configure() {
    this.connector.connect(this)
  }
}