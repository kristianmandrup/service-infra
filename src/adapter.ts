import { Service } from './service'
import { Plug } from './plug'

class Slot {

}

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Adapter {
  protected sockets: Map<string, Plug>
  protected types: string[]
  protected name: string
  protected service: Service

  constructor(name: string, service: Service) {
    this.name = name
    this.service = service
    this.sockets = new Map()
  }

  comfigureSockets(...types: string[]) {
    this.types = types
  }

  plugFits(plug: Plug): any {
    try {
      return this.sockets.get(plug.type)
    } catch (e) {
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
  }

  protected unplugOne(plug: Plug): boolean {
    return this.eject(plug)
  }

  plugin(...plugs: Plug[]): boolean {
    return plugs.every(plug => this.pluginOne(plug))
  }

  unplug(...plugs: Plug[]) {
    return plugs.every(plug => this.unplugOne(plug))
  }
}
