import { Service } from './service'
// import { Container, injectable, inject } from 'inversify'

// @injectable()
export class DataService extends Service {
  constructor(name: string) {
    super(name)
    this.configure()
  }

  configure() {
    this.input.subscribe(this)
    this.input.addStream('updates')
    this.output.addStream('updated', 'errors')
  }
}