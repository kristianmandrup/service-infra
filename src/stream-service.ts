import { Service } from './service'
import { Connector } from './connector'
import { Subscription } from '@reactivex/rxjs'
import { IConnectable } from './connector'

export class StreamService implements IConnectable {
  // Controls internal service stream
  // Internal services can connect here to subscribe/emit events
  protected connector: Connector
  name: string

  constructor(name: string, opts?: Object) {
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

  connect(service: Service) {
    this.connector.connect(service)
  }

  configure(opts?: Object) {
    this.connector.connect(this)
  }
}