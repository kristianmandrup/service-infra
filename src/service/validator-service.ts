import { Service } from './service'
import { Stream } from '../stream'
import { IOConfig } from '../io'
import { Observer, Subject, Observable, Subscription, Subscriber } from '@reactivex/rxjs'
import { IEvent, Event } from '../event'


export class ValidatorService extends Service {
  constructor(name = 'validator', io?: IOConfig) {
    super('validator:' + name, io)
  }

  configure() {
    this.input.addStream('data')
    this.output.addStream('valid', 'invalid')
  }

  validate(data: Object): void {
    let valid = this.isValid(data)
    valid ? this.emitResult('valid', data, valid) : this.emitResult('invalid', data, valid)
  }

  isValid(data: Object): boolean {
    return true
  }

  protected event(name: string, data: Object, valid: boolean): IEvent {
    return new Event(name, { valid, data }).msg
  }

  emitResult(name: string, data: Object, valid: boolean): void {
    const event = this.event(name, data, valid)
    this.output.emit(name, event)
  }
}