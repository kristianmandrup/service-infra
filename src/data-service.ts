import { Service } from './service'
import { Container, injectable, inject } from 'inversify'

@injectable()
export class DataService extends Service {
  constructor() {
    super()
  }
}