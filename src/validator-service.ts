import { Service } from './service'
import { Stream } from './stream'

export class ValidatorService extends Service {
  constructor(name: '') {
    super('validator:' + name)
  }

  configure() {
    this.input.subscribe(this)
    this.input.addStream('data')
    this.output.addStream('valid', 'invalid')

    // this.input.subscribe('data', this.validate)
  }

  validate(data: Object): void {
    let valid = this.isValid(data)
    valid ? this.emit('valid', data, valid) : this.emit('invalid', data, valid)
  }

  isValid(data: Object): boolean {
    return true
  }

  emit(name: String, data: Object, validity: boolean): void {
    this.out.emit(name, { valid: validity, data })
  }
}