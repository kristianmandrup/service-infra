import { Subject, Subscription } from '@reactivex/rxjs'

/*
 * Abstracted Stream, such as Observable
**/

export class Stream {
  protected source: Subject<any>
  protected name: String

  constructor(name: String) {
    this.name = name
    this.source = new Subject()
  }

  subscribe(subscriber) {
    this.source.subscribe(subscriber)
  }

  emit(event: Object) {
    this.source.next(1)
  }
}

// @injectable()
export class Streamer {
  streams: Map<String, Stream[]> // TODO: should be Interface

  createStream(name): Stream {
    return new Stream(name)
  }

  createFrom(name: String) {
    this.add(this.createStream(name))
  }

  add(stream) {
    this.streams.set(stream.name, stream)
  }

  remove(name) {
    this.streams.delete(name)
  }

  // stream: Stream
  constructor() {
  }
}
