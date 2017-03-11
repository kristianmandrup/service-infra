import { Stream, Streamer } from './stream'

export class GateWay {
  streamer: Streamer

  add(...names: String[]) {
    names.map(name => this.streamer.createFrom(name))
  }

  remove(name) {
    this.streamer.remove(name)
  }

  subscribe(observer: any) {
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