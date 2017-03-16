// Stream using AsyncSubject
// Useful for async operations such as an Ajax request

import { AsyncSubject } from '@reactivex/rxjs'
import { Stream } from './stream'
import { IEvent } from './event'

export class AsyncStream extends Stream {
  protected _source: AsyncSubject<IEvent>

  constructor(name: string, eventSource?: AsyncSubject<IEvent>) {
    super(name, eventSource)
  }
}