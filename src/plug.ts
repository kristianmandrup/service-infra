import { Adapter } from './adapter'

// used to plug in a service and connect the two IO streams in each direction:
// I->O
// O->I
export class Plug {
  public type: string

  constructor(type: string) {
    this.type = type
  }

  plugin(adapter: Adapter): boolean {
    return adapter.plugin(this)
  }
}