import { Service } from './service'
import { Plug } from './plug'
import { Input, Output } from './io'

export class Adaptable {
  protected _service: Service

  constructor(service: Service) {
    this._service = service
  }

  get service() {
    return this._service
  }

  get input(): Input {
    return this._service.input
  }

  get output(): Output {
    return this._service.output
  }
}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Adapter extends Adaptable {
  protected sockets: Map<string, Plug>
  protected types: string[]
  protected name: string

  constructor(service: Service) {
    super(service)
    this.sockets = new Map()
  }

  configSockets(...types: string[]) {
    this.types = types
  }

  pluggedIn() {
    return this.sockets.keys()
  }

  isPluggedIn(type) {
    return Array.from(this.sockets.keys()).indexOf(type) >= 0
  }

  streamsMatch(plug: Plug): boolean {
    return this.input.streamsMatch(plug.output) && plug.input.streamsMatch(this.output)
  }


  // TODO:
  // since the plug is used to connect one service into another, it is really all about
  // connecting matching input/output streams
  // so perhaps no use for the types list except as a convenience
  // also when we plug a service into another, the matching streams must be connected
  plugFits(plug: Plug): boolean {
    try {
      if (this.types.indexOf(plug.type) >= 0) {
        return this.streamsMatch(plug)
      }
    } catch (e) {
      // console.log(e)
      return false
    }
  }

  protected inject(plug: Plug) {
    this.sockets.set(plug.type, plug)
  }

  protected eject(plug: Plug) {
    return this.sockets.delete(plug.type)
  }

  protected pluginOne(plug: Plug): boolean {
    if (!this.plugFits(plug)) return false
    this.inject(plug)
    return true
  }

  protected unplugOne(plug: Plug): boolean {
    return this.eject(plug)
  }

  plugin(...plugs: Plug[]): boolean {
    return plugs.every(plug => {
      return this.pluginOne(plug)
    })
  }

  unplug(...plugs: Plug[]) {
    return plugs.every(plug => this.unplugOne(plug))
  }
}
