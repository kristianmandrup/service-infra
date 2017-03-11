import { Service } from './service'

class ApiConnection {
  connect() {
  }
}

class ApiService extends Service {
  private connection: ApiConnection

  constructor() {
    super()
  }
}