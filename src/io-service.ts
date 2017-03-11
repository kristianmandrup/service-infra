import { Container, injectable, inject } from 'inversify'
import { StreamService } from './stream-service'
import { Input, Output } from './io'
import { Adapter, Plug } from './connector'


export class IOService extends StreamService {
  public input: Input
  public output: Output

  protected adapters: Map<String, IOService>
  protected plug: Plug

  // TODO: inject input and output
  constructor(name: String) {
    super(name)
    console.log('IO service')
  }

  plugin(service: IOService) {
    this.adapters.set(service.name, service)
  }

  unplug(name) {
    this.adapters.delete(name)
  }
}
