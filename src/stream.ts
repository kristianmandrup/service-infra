import { Subject, Subscription } from '@reactivex/rxjs'

/*
 * Abstracted Stream, such as Observable
**/

export class Stream {
  protected source: Subject<any>

  constructor() {
    this.source = new Subject()
  }

  subscribe(subscriber) {
    this.source.subscribe(subscriber)
  }

  emit(event: Object) {
    this.source.next(1)
  }
}
