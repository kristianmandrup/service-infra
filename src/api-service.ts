import { Service } from './service'

class Connection {
  connect() {
  }
}

class HttpConnection extends Connection {
  connect() {
  }
}

class SocketConnection extends Connection {
  connect() {
  }
}


/*
 * Communicates with external systems
 * Kind of IO service
**/
class ApiService extends Service {
  private connection: Connection

  constructor() {
    super()
    this.connection.connect()
  }
}
