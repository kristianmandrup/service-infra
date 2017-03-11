import { Stream } from './stream'
import { Adapter, Connector } from './connector'

export class StreamService {
  protected stream: Stream
  protected connector: Connector

  // list of adapters? named adapters in a Set?
  private adapters: Adapter[]

  constructor() {
    this.configure()
  }

  emit(event: any) {
    this.stream.emit(event)
  }

  subscribe(subscriber) {
    this.stream.subscribe(subscriber)
  }

  configure() {
    this.connector.connect(this)
  }
}