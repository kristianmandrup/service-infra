import { Service } from './service'
import { Container, injectable, inject } from 'inversify'
import { Adapter } from './connector'
import { Stream } from './stream'

@injectable()
export class DataService extends Service {
  // on Input
  // updates: Stream

  // on Output
  // updated: Stream
  // errors: Stream

  constructor() {
    super()
    this.configure()
  }

  configure() {
    this.input.subscribe(this)
    this.input.add('updates')
    this.output.add('updated', 'errors')
  }
}