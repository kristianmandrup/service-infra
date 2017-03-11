import { Service } from './service'

class ApiConnection {
  connect() {
  }
}

/*
 * Communicates with external systems
**/
class ApiService extends Service {
  private connection: ApiConnection

  constructor() {
    super()
  }
}