import { Service } from './service'
import { IOConfig } from './io'
import { IConnectable } from './connector'

/*
 * Communicates with external systems
 * Kind of IO service
**/
export class AppService extends Service {

  get backbone() {
    return this.stream
  }

  constructor(name: string, io: IOConfig) {
    super(name, io)
  }
}
