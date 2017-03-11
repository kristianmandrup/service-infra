import { Service } from './service'
import { Container, injectable, inject } from 'inversify'
import { Adapter } from './util'
import { Stream } from './stream'

@injectable()
export class DataService extends Service {
  // on Input
  updates: Stream

  // on Output
  updated: Stream
  errors: Stream

  constructor() {
    super()

    this.input.addStream('updates', this.updates)
  }

  configure() {
    this.updates.subscribe(this.connector)
  }
}