import { Container, injectable, inject } from 'inversify'
import { Observable } from '@reactivex/rxjs'

class Stream {
  private observer: Observable<any>

  constructor() {
    this.observer = Observable.range(1, 5)
  }
}

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


export class IOService {
  private input: Input
  private output: Output

  // TODO: inject input and output
  constructor() {
    console.log('IO service')
  }
}
