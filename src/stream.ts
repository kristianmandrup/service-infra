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

  subscribe(subscriber: any): Subscription {
    const subscription = this.source.subscribe(subscriber)
    this.subscriptions.set(subscriber.name, subscription)
    return subscription
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
    this.source.next(event)
  }
}

export interface IStreamFactory {
  createStream: Function
}

export class StreamFactory implements IStreamFactory {
  createStream(name): Stream {
    return new Stream(name)
  }
}
