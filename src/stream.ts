import { Observable } from '@reactivex/rxjs'

export class Stream {
  private observer: Observable<any>

  constructor() {
    this.observer = Observable.range(1, 5)
  }
}
