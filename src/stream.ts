import { Subject, Observable, Subscription, Subscriber } from '@reactivex/rxjs'
import { Event } from './event'

export interface IStreamFactory {
  createStream: Function
}

export class StreamFactory implements IStreamFactory {
  public createStream(name): Stream {
    return new Stream(name)
  }
}


/*
 * Abstracted Stream, such as Observable
**/
export class Stream {
  protected source: Observable<Event>
  protected subscriptions: Map<String, Subscription>
  public name: String
  public static factory = new StreamFactory()

  constructor(name: String) {
    this.name = name
    this.source = Observable.create(event => event) // ie. the next() method
  }

  get factory() {
    return Stream.factory
  }

  // todo: allow name/function or object key/value?
  subscribeOne(name, subscriber: Subscriber<Event>): Subscription {
    if (!subscriber) {
      throw 'Subscriber must have a name'
    }
    const subscription = this.source.subscribe(subscriber)
    this.subscriptions.set(name, subscriber)
    return subscription
  }

  subscribe(subscribers: Map<String, Subscriber<Event>>) {
    subscribers.forEach((subscriber, name) => {
      this.subscribeOne(name, subscriber)
    })
  }

  unsubscribe(name: String) {
    this.subscriptions.get(name).unsubscribe()
  }

  unsubscribeAll() {
    for (let key of this.subscriptions.keys()) {
      this.unsubscribe(key)
    }
  }

  // TODO: fix this!!
  emit(event: Event) {
    this.source.forEach(event => {
      return event
    })
  }
}
