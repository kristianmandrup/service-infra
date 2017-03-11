import { Stream } from './stream'

// @injectable()
export class Streamer {
  streams: Map<String, Stream[]> // TODO: should be Interface

  add(name, stream) {
    this.streams.set(name, stream)
  }

  remove(name) {
    this.streams.delete(name)
  }

  // stream: Stream
  constructor() {
  }
}

export class GateWay {
  streamer: Streamer

  add(name, stream) {
    this.streamer.add(name, stream)
  }

  remove(name) {
    this.streamer.remove(name)
  }
}


export class Input extends GateWay {
  streamer: Streamer

  constructor() {
    super()
  }
}

export class Output extends GateWay {
  constructor() {
    super()
  }
}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Adapter {
  constructor() {
  }

  adapt(plug: Plug) {
  }
}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Plug {
  constructor() {
  }

  plugin(adapter: Adapter) {
  }
}