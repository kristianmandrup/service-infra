import { Stream, IStreamFactory, StreamFactory } from './stream'
import { Observer, Subject, Observable, Subscription, Subscriber } from '@reactivex/rxjs'
import { IEvent, Event } from './event'

export interface IOConfig {
  input: string,
  output: string
}

export class GateWay {
  protected streamsMap: Map<string, Stream> // TODO: should be Interface
  public stream: Stream

  constructor(...streamNames: string[]) {
    this.streamsMap = new Map()
    this.addStream(...streamNames)
  }

  get streams(): Stream[] {
    return Array.from(this.streamsMap.values())
  }

  get streamNames(): string[] {
    return Array.from(this.streamsMap.keys())
  }

  hasNamedStream(name: string) {
    return this.streamNames.includes(name)
  }

  streamsMatch(gateway: GateWay) {
    return gateway.streamNames.every(name => this.hasNamedStream(name))
  }

  addStream(...names: string[]) {
    names.map(name => {
      this.setStream(name, this.stream.factory.createStream(name))
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

  subscribe(subscriber: Subscriber<IEvent>, name?: string) {
    const stream = name ? this.findStream(name) : this.stream
    return stream.subscribe(subscriber)
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
  constructor(...streams) {
    super(...streams)
  }
}

export class Output extends GateWay {
  constructor(...streams) {
    super(...streams)
  }
}