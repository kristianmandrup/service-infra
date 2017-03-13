import { Container, injectable, inject } from 'inversify'
import { StreamService } from './stream-service'
import { Input, Output, IOConfig } from './io'
import { Adapter } from './adapter'
import { Plug } from './plug'

export class IOService extends StreamService {
  public input: Input
  public output: Output

  protected adapters: Map<String, IOService>
  protected plug: Plug

  // TODO: inject input and output
  constructor(name: string, io: IOConfig) {
    super(name)
    this.configure(io)
  }

  configure(io: IOConfig) {
    this.input = new Input(io.input)
    this.output = new Output(io.output)
  }

  plugin(service: IOService) {
    this.adapters.set(service.name, service)
  }

  unplug(name) {
    this.adapters.delete(name)
  }
}
