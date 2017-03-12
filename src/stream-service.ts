import { Adapter, Connector } from './connector'
import { Subscription } from '@reactivex/rxjs'


export class StreamService {
  // Controls internal service stream
  // Internal services can connect here to subscribe/emit events
  protected connector: Connector
  protected name: String

  constructor(name: String, opts?: Object) {
    this.name = name
    this.configure(opts)
  }

  emit(event: any) {
    this.connector.emit(event)
  }

  subscribe(subscriber): Subscription {
    return this.connector.subscribe(subscriber)
  }

  unsubscribe(subscriber) {
    this.connector.unsubscribe(subscriber)
  }


  configure(opts?: Object) {
    this.connector.connect(this)
  }
}