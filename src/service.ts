import { IOService } from './io-service'
import { Container, injectable, inject } from 'inversify'

// @injectable()
export class Service extends IOService {
  constructor(name: String) {
    super(name)
    console.log('service')
  }
}
