import { Service } from './service'
import { Adapter } from './adapter'

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Plug {
  public type: string
  public inAdapter: Adapter
  protected service: Service

  constructor(type: string, service: Service) {
    this.type = type
    this.service = service
  }

  plugsInto(adapter: Adapter): boolean {
    try {
      return adapter.plugFits(this)
    } catch (e) {
      return false
    }
  }

  plugin(adapter: Adapter): boolean {
    try {
      const result = adapter.plugin(this)
      if (result) {
        this.inAdapter = adapter
      }
      return result
    } catch (e) {
      return false
    }
  }
}