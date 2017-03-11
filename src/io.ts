import { Stream, StreamFactory } from './stream'

export class GateWay {
  protected streams: Map<String, Stream> // TODO: should be Interface
  protected stream: Stream

  factory: StreamFactory

  addStream(...names: String[]) {
    names.map(name => {
      this.streams.set(name, this.factory.createStream(name))
    })
    this.mergeAll()
  }

  mergeAll() {
    for (let stream of this.streams.values())
      stream.subscribe(this.stream)
  }

  removeStream(...names) {
    names.map(name => {
      this.streams.delete(name)
    })
    this.mergeAll()
  }

  removeAll() {
    for (let stream of this.streams.values()) {
      stream.unsubscribeAll()
    }
    this.streams.clear()
  }

  subscribe(observer: any, name?: String) {
    return name ? this.streams.get(name).subscribe(observer) : this.stream.subscribe(observer)
  }

  getStream(name) {
    return this.streams.get(name)
  }

  emit(name, event) {
    this.getStream(name).emit(event)
  }
}


export class Input extends GateWay {
  constructor() {
    super()
  }
}

export class Output extends GateWay {
  constructor() {
    super()
  }
}