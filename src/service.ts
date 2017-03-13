import { IOConfig } from './io'
import { IOService } from './io-service'
import { Container, injectable, inject } from 'inversify'

// @injectable()
export class Service extends IOService {
  constructor(name: string, io: IOConfig) {
    super(name, io)
  }
}
