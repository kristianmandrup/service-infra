import { Container, injectable, inject } from 'inversify'
import { StreamService } from './stream-service'
import { Input, Output } from './io'
import { Adapter } from './adapter'
import { Plug } from './plug'

interface IOConfig {
  input: string,
  output: string
}

export class IOService extends StreamService {
  public input: Input
  public output: Output

  protected adapters: Map<String, IOService>
  protected plug: Plug

  // TODO: inject input and output
  constructor(name: string, io: IOConfig) {
    super(name)
    this.configure(io)
    console.log('IO service')
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
