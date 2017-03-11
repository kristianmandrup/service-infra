import { Container, injectable, inject } from 'inversify'

@injectable()
class Streamer {
  stream: Stream // TODO: should be Interface

  // stream: Stream
  constructor() {
  }
}

class Input extends Streamer {
  constructor() {
    super()
  }
}

class Output extends Streamer {
  constructor() {
    super()
  }
}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Adapter {
  constructor() {
  }

  adapt(plug: Plug) {
  }
}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
class Plug {
  constructor() {
  }

  plugin(adapter: Adapter) {
  }
}


export class IOService {
  private input: Input
  private output: Output

  // list of adapters? named adapters in a Set?
  private adapter: Adapter
  private plug: Plug

  // TODO: inject input and output
  constructor() {
    console.log('IO service')
  }

  plugin(service: IOService) {
  }
}
