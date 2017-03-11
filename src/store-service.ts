import { Service } from './service'

class Storage {

}

class Query {

}


export class StoreService extends Service {
  private storage: Storage // TODO: interface
  private query: Query

  constructor() {
    super()
  }
}