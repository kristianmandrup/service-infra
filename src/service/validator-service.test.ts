import test from 'ava'
import { ValidatorService } from './validator-service'
import { Stream } from '../stream'
import { Connector } from '../connector'
import { Subject, Subscription, Subscriber } from '@reactivex/rxjs'

test('new', t => {
  const service = new ValidatorService('x')
  t.is(service.constructor, ValidatorService)
})

test('connect', t => {
  const service = new ValidatorService('x')
  const _service = new ValidatorService('y')

  service.connect(_service)
  t.truthy(service.isConnected('y'))
})

test('disconnect', t => {
  const service = new StreamService('x')
  t.is(service.connector, Connector)
})


test('subscribe', async t => {
  const service = new StreamService('x')
  const subscriber = new Subscriber()

  const subscription = service.subscribe(subscriber)
  t.is(subscription.constructor, Subscription)

})

test('emit', async t => {
  const service = new StreamService('x')
  const subscriber = new Subscriber()
  const emitEvent = 1

  service.emit(emitEvent)
  await subscriber.next(event => {
    t.is(event, emitEvent)
  })

  t.is(service.constructor, StreamService)
})
