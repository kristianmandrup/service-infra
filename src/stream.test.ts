import test from 'ava'
import { Stream } from './stream'
import { Connector } from './connector'
import { Event } from './event'
import { Observable, Subject, Subscription, Subscriber } from '@reactivex/rxjs'

function testSubscriber(t) {
  return Subscriber.create((event: any) => {
    console.log('event', event)
    t.is(event.type, 'count')
  })
}

function createEvent(index = 1) {
  return new Event('counter', { type: 'count', number: index })
}

const eventGenerator = Observable.range(1, 2).map(index => {
  console.log('new event', index)
  return createEvent(index).msg
})

function createStream(name = 'x') {
  // return new Stream(name, eventGenerator)
  return new Stream(name)
}


test('new', t => {
  const stream = createStream()
  t.is(stream.constructor, Stream)
})

test('subscribeOne - invalid name', async t => {
  const stream = createStream()
  // error since no name
  stream.subscribeOne(null, testSubscriber(t))
})

test('subscribeOne - valid name', async t => {
  const stream = createStream()

  // good subscriber with name
  stream.subscribeOne('a', testSubscriber(t))
})

test('subscribe - Object', t => {
  const stream = createStream()

  const subscribers = {
    a: testSubscriber(t),
    b: testSubscriber(t)
  }

  stream.subscribe(subscribers)
  stream.emit(createEvent().msg)
})

test('subscribe - Map', t => {
  const stream = createStream()

  const subscribers = new Map()
  subscribers.set('a', testSubscriber(t))
  subscribers.set('b', testSubscriber(t))

  stream.subscribe(subscribers)
})


test('unsubscribe - uknown name', t => {
  const stream = createStream()
  stream.subscribeOne('a', testSubscriber(t))

  // error since no such name
  stream.unsubscribe('unknown')
})

test('unsubscribe - existing name', t => {
  const stream = createStream()
  stream.subscribeOne('a', testSubscriber(t))

  // correct name
  stream.unsubscribe('a')
})

test('unsubscribeAll - none', t => {
  const stream = createStream()

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

test('unsubscribeAll - one', t => {
  const stream = createStream()

  stream.subscribeOne('a', testSubscriber(t))

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})


test('unsubscribeAll - two', t => {
  const stream = createStream()

  const subscribers = {
    a: testSubscriber(t),
    b: testSubscriber(t)
  }

  stream.subscribe(subscribers)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

