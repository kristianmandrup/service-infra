import { Subject, Subscription } from '@reactivex/rxjs'

export interface IStreamFactory {
  createStream: Function
}

export class StreamFactory implements IStreamFactory {
  createStream(name): Stream {
    return new Stream(name)
  }
}

/*
 * Abstracted Stream, such as Observable
**/
export class Stream {
  protected source: Subject<any>
  protected subscriptions: Map<String, Subscription>
  public name: String
  public static factory = new StreamFactory()

  constructor(name: String) {
    this.name = name
    this.source = new Subject()
  }

  get factory() {
    return Stream.factory
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
