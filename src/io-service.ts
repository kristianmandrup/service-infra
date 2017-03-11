import { Container, injectable, inject } from 'inversify'
import { StreamService } from './stream-service'
import { Input, Output } from './io'
import { Adapter, Plug } from './connector'


export class IOService extends StreamService {
  protected input: Input
  protected output: Output

  protected adapters: Map<String, Adapter>
  protected plug: Plug

  // TODO: inject input and output
  constructor() {
    super()
    console.log('IO service')
  }

  plugin(service: IOService) {
    this.adapters.set(service.name, service)
  }

  unplug(name) {
    this.adapters.delete(name)
  }
}
