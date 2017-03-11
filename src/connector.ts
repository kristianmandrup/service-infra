export interface Connectable {
}

export class Connector {
  constructor() {

  }

  connect(...connectables: Connectable[]) {
    connectables.map(connectable => {
      connectable
    })
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