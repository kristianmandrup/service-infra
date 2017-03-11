import test from 'ava'
import { StreamService } from './stream-service'
import { Subject, Subscription, Subscriber } from '@reactivex/rxjs'

test('new', t => {
  const service = new StreamService()
  t.is(service.constructor, StreamService)
})

test('subscribe', async t => {
  const service = new StreamService()
  const subscriber = new Subscriber()
  const emitEvent = 1

  service.subscribe(subscriber)
  service.emit(emitEvent)
  await subscriber.next(event => {
    t.is(event, emitEvent)
  })

  t.is(service.constructor, StreamService)
})
