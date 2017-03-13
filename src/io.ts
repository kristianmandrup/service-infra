import { Stream, IStreamFactory, StreamFactory } from './stream'

export class GateWay {
  protected streamsMap: Map<string, Stream> // TODO: should be Interface
  public stream: Stream
  protected factory: IStreamFactory

  constructor(factory?: IStreamFactory) {
    this.streamsMap = new Map()
    this.factory = factory || new StreamFactory()
  }

  get streams(): Stream[] {
    return Array.from(this.streams.values())
  }

  addStream(...names: string[]) {
    names.map(name => {
      this.setStream(name, this.factory.createStream(name))
    })
    this.mergeAll()
  }

  mergeAll() {
    this.streams.map(stream => stream.subscribe(this.stream))
  }

  removeStream(...names) {
    names.map(name => {
      this.deleteStream(name)
    })
    this.mergeAll()
  }

  removeAll() {
    this.streams.map(stream => stream.unsubscribeAll())
    this.streamsMap.clear()
  }

  subscribe(observer: any, name?: string) {
    return name ? this.findStream(name).subscribe(observer) : this.stream.subscribe(observer)
  }

  setStream(name: string, stream: Stream) {
    this.streamsMap.set(name, stream)
  }

  deleteStream(name: string) {
    this.streamsMap.delete(name)
  }


  findStream(name) {
    return this.streamsMap.get(name)
  }

  emit(name, event) {
    this.findStream(name).emit(event)
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