import { Service } from './service'
import { IConnectable, Connector } from '../connector'
import { Subscription } from '@reactivex/rxjs'

export class StreamService implements IConnectable {
  // Controls internal service stream
  // Internal services can connect here to subscribe/emit events
  protected connector: Connector
  name: string

  constructor(name: string, opts?: Object) {
    this.name = name
    this.configure(opts)
  }

  get stream() {
    return this.connector.stream
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

  isConnected(name: string) {
    return this.connector.isConnected(name)
  }

  connect(service: Service) {
    this.connector.connect(service)
  }

  connectAll(...services: Service[]) {
    services.map(service => this.connect(service))
  }

  configure(opts?: Object) {
    this.connector.connect(this)
  }
}