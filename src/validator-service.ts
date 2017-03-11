import { Service } from './service'
import { Stream } from './stream'

export class ValidatorService extends Service {
  // on Input
  protected data: Stream

  // on Output
  protected valid: Stream
  protected invalid: Stream

  constructor() {
    super()
  }

  configure() {
    this.data.subscribe(this.validate)
  }

  validate(data: Object): void {
    this.isValid(data) ? this.addValid(data) : this.addInValid(data)
  }

  isValid(data: Object): boolean {
    return true
  }

  addValid(data: Object): void {
    this.valid.emit({ valid: true, data })
  }
}