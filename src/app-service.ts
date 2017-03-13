import { Service } from './service'
import { IConnectable } from './connector'

/*
 * Communicates with external systems
 * Kind of IO service
**/
export class AppService extends Service {

  get backbone() {
    return this.stream
  }

  constructor(name: string, ...connectables: IConnectable[]) {
    super(name)
    this.connector.connect(...connectables)
  }
}
