import { IOService } from './io-service'
import { Container, injectable, inject } from 'inversify'

// @injectable()
export class Service extends IOService {
  constructor(name: string, io = {}) {
    super(name, io)
    console.log('service')
  }
}
