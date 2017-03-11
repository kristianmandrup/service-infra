import { Service } from './service'
import { Stream } from './stream'

export class ValidatorService extends Service {
  constructor() {
    super()
  }

  valid: Stream
  invalid: Stream

  validate() {

  }
}