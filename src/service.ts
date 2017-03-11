import { IOService } from './io-service'
import { Container, injectable, inject } from 'inversify'

class Connector {

}

@injectable()
export class Service extends IOService {
  private connector: Connector

  constructor() {
    super()
    console.log('service')
  }
}
