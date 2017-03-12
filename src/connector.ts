import { Stream } from './stream'
import { Service } from './service'
import { Subscription } from '@reactivex/rxjs'

export interface IConnectable {
  name: String
}

export class Connector {
  protected stream: Stream
  protected connected: Map<String, IConnectable>

  constructor(name) {
    this.stream = new Stream(name)
  }

  emit(event: any) {
    this.stream.emit(event)
  }

  subscribe(subscriber): Subscription {
    return this.stream.subscribe(subscriber)
  }

  unsubscribe(subscriber) {
    this.stream.unsubscribe(subscriber)
  }

  connect(...connectables: IConnectable[]) {
    connectables.map(connectable => {
      this.connected.set(connectable.name, connectable)
    })
  }

  disconnect(...names) {
  }
}

