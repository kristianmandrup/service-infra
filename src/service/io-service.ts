import { Container, injectable, inject } from 'inversify'
import { StreamService } from './stream-service'
import { Input, Output, IOConfig } from '../io'
import { Adapter } from '../adapter'
import { Plug } from '../plug'

export class IOService extends StreamService {
  // TODO: perhaps input/output could just be adapter/plug as well?
  // output a plug:output only pluggable into an adapter:input and vice versa
  public input: Input
  public output: Output

  protected adapters: Map<String, IOService>
  protected plugs: Map<String, Plug>

  // TODO: inject input and output
  constructor(name: string, io?: IOConfig) {
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
