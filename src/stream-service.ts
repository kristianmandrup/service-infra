import { Stream } from './stream'
import { Adapter, Connector } from './connector'

export class StreamService {
  protected stream: Stream
  protected connector: Connector
  protected name: String

  constructor(name: String, opts?: Object) {
    this.name = name
    this.configure(opts)
  }

  emit(event: any) {
    this.stream.emit(event)
  }

  subscribe(subscriber) {
    this.stream.subscribe(subscriber)
  }

  configure(opts?: Object) {
    this.connector.connect(this)
  }
}