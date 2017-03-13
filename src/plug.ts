import { Service } from './service'
import { Adapter, Adaptable } from './adapter'

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Plug extends Adaptable {
  protected _type: string
  protected _adapter: Adapter
  protected _service: Service

  constructor(type: string, service: Service) {
    super(service)
    this._type = type
  }

  get inAdapter() {
    return this._adapter
  }

  get type() {
    return this._type
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
        this._adapter = adapter
      }
      return result
    } catch (e) {
      return false
    }
  }
}