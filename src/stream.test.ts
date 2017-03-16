import test from 'ava'
import { Stream } from './stream'
import { Connector } from './connector'
import { Event } from './event'
import { Observable, Subject, Subscription, Subscriber } from '@reactivex/rxjs'

// var subscriber = Subscriber.create(function (value) {
//     if (value === 2) {
//         throw 'error!';
//     }
// }, errorSpy, completeSpy);
// subscriber.next(1);


function testSubscriber(t) {
  return Subscriber.create((event: any) => {
    console.log('event', event.msg)
    t.is(event.msg.type, 'count')
  })
}

const eventGenerator = Observable.range(1, 2).map(index => {
  console.log('new event', index)
  return new Event('counter', { type: 'count', number: index })
})

test('new', t => {
  const stream = new Stream('x', eventGenerator)
  t.is(stream.constructor, Stream)
})

test('subscribeOne - invalid name', async t => {
  const stream = new Stream('x', eventGenerator)
  // error since no name
  stream.subscribeOne(null, testSubscriber(t))
})

test('subscribeOne - valid name', async t => {
  const stream = new Stream('x', eventGenerator)

  // good subscriber with name
  stream.subscribeOne('a', testSubscriber(t))
  // subscriber.next()
})

test('subscribe - Object', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = {
    a: testSubscriber(t),
    b: testSubscriber(t)
  }

  stream.subscribe(subscribers)
})

test('subscribe - Map', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = new Map()
  subscribers.set('a', testSubscriber(t))
  subscribers.set('b', testSubscriber(t))

  stream.subscribe(subscribers)
})


test('unsubscribe - uknown name', t => {
  const stream = new Stream('x', eventGenerator)
  stream.subscribeOne('a', testSubscriber(t))

  // error since no such name
  stream.unsubscribe('unknown')
})

test('unsubscribe - existing name', t => {
  const stream = new Stream('x', eventGenerator)
  stream.subscribeOne('a', testSubscriber(t))

  // correct name
  stream.unsubscribe('a')
})

test('unsubscribeAll - none', t => {
  const stream = new Stream('x', eventGenerator)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

test('unsubscribeAll - one', t => {
  const stream = new Stream('x', eventGenerator)

  stream.subscribeOne('a', testSubscriber(t))

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})


test('unsubscribeAll - two', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = {
    a: testSubscriber(t),
    b: testSubscriber(t)
  }

  stream.subscribe(subscribers)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

