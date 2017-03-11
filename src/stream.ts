import { Subject, Subscription } from '@reactivex/rxjs'

/*
 * Abstracted Stream, such as Observable
**/
export class Stream {
  protected source: Subject<any>
  protected subscriptions: Map<String, Subscription>
  public name: String


  constructor(name: String) {
    this.name = name
    this.source = new Subject()
  }

  subscribe(subscriber: any) {
    this.subscriptions.set(subscriber.name, this.source.subscribe(subscriber))
  }

  unsubscribe(name: String) {
    this.subscriptions.get(name).unsubscribe()
  }

  unsubscribeAll() {
    for (let key of this.subscriptions.keys()) {
      this.unsubscribe(key)
    }
  }

  emit(event: Object) {
    this.source.next(1)
  }
}

export class StreamFactory {
  createStream(name): Stream {
    return new Stream(name)
  }
}
