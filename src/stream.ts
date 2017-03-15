import { Subject, Observable, Subscription } from '@reactivex/rxjs'

export interface IStreamFactory {
  createStream: Function
}

export class StreamFactory implements IStreamFactory {
  public createStream(name): Stream {
    return new Stream(name)
  }
}


export interface ISubscriber {
  name: string
}

/*
 * Abstracted Stream, such as Observable
**/
export class Stream {
  protected source: Observable<ISubscriber>
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

  subscribeOne(subscriber: any): Subscription {
    if (!subscriber.name) {
      throw 'Subscriber must have a name'
    }
    const subscription = this.source.subscribe(subscriber)
    this.subscriptions.set(subscriber.name, subscription)
    return subscription
  }

  subscribe(...subscribers: any[]): Subscription[] {
    return subscribers.map(subscriber => this.subscribeOne(subscriber))
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
