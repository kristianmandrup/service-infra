import { Service } from './service'
import { Container, injectable, inject } from 'inversify'
import { Adapter } from './connector'
import { Stream } from './stream'

@injectable()
export class DataService extends Service {
  constructor(name: String) {
    super(name)
    this.configure()
  }

  configure() {
    this.input.subscribe(this)
    this.input.addStream('updates')
    this.output.addStream('updated', 'errors')
  }
}