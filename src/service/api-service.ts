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
export class ApiService extends Service {
  private connection: Connection

  constructor(name: string) {
    super(name)
    this.connection.connect()
  }
}
