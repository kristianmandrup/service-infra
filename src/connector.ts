import { Stream } from './stream'
import { Service } from './service'
import { Subscription } from '@reactivex/rxjs'

export interface IConnectable {
  name: String
}

export class Connector {
  protected _stream: Stream
  protected connected: Map<String, IConnectable>

  constructor(name) {
    this._stream = new Stream(name)
  }

  get stream() {
    return this.stream
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

  // TODO: connect by concat of streams or
  // some other way ensuring that events from each source
  // stream flows into connected target stream
  connect(...connectables: IConnectable[]) {
    connectables.map(connectable => {
      this.connected.set(connectable.name, connectable)
    })
  }

  disconnect(...names) {
  }
}

