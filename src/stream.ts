import { Subject, Observable, Subscription, Subscriber } from '@reactivex/rxjs'
import { Event } from './event'

export interface IStreamFactory {
  createStream: Function
}

export class StreamFactory implements IStreamFactory {
  public createStream(name: string, eventSource: Observable<Event>): Stream {
    return new Stream(name, eventSource)
  }
}

function* entries(obj) {
  for (let key in obj)
    yield [key, obj[key]];
}

/*
 * Abstracted Stream, such as Observable
**/
export class Stream {
  protected _source: Observable<Event>
  protected subscriptions: Map<string, Subscription>
  protected _name: string
  public static factory = new StreamFactory()

  constructor(name: string, eventSource: Observable<Event>) {
    this._name = name
    this._source = eventSource
  }

  get name() {
    return this._name
  }

  get source() {
    return this._source
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

  protected subscribeObj(subscribers: Object): void {
    for (let name in subscribers) {
      let subscriber = subscribers[name]
      this.subscribeOne(name, subscriber)
    }
  }

  protected subscribeMap(subscribers: Map<string, Subscriber<Event>>): void {
    subscribers.forEach((subscriber, name) => {
      this.subscribeOne(name, subscriber)
    })
  }

  subscribe(subscribers: any): void {
    if (subscribers instanceof Map)
      return this.subscribeMap(subscribers)
    if (subscribers instanceof Object)
      return this.subscribeObj(subscribers)
    throw `Invalid subscribers #{type}`
  }

  unsubscribe(name: string) {
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
