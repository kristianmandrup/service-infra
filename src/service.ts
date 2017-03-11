import { IOService } from './io-service'
import { Container, injectable, inject } from 'inversify'

class Connector {

}

@injectable()
export class Service extends IOService {
  constructor(name: String) {
    super(name)
    console.log('service')
  }
}
