import test from 'ava'
import { StreamService } from './stream-service'
import { Stream } from './stream'
import { Connector } from './connector'
import { Event } from './event'
import { Observable, Subject, Subscription, Subscriber } from '@reactivex/rxjs'

const subscriber: Subscriber<Event> = Subscriber.create((x: Event) => {
  console.log('event', x)
})

const eventGenerator = Observable.interval(500).map(index => {
  return new Event({ type: 'counter', number: index })
})

test('new', t => {
  const stream = new Stream('x', eventGenerator)
  t.is(stream.constructor, Stream)
})

test('subscribeOne - invalid name', t => {
  const stream = new Stream('x', eventGenerator)
  // error since no name
  stream.subscribeOne(null, subscriber)
})

test('subscribeOne - valid name', t => {
  const stream = new Stream('x', eventGenerator)

  // good subscriber with name
  stream.subscribeOne('a', subscriber)
})

test('subscribe - Object', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = {
    a: subscriber,
    b: subscriber
  }

  stream.subscribe(subscribers)
})

test('subscribe - Map', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = new Map()
  subscribers.set('a', subscriber)
  subscribers.set('b', subscriber)

  stream.subscribe(subscribers)
})


test('unsubscribe - uknown name', t => {
  const stream = new Stream('x', eventGenerator)
  stream.subscribeOne('a', subscriber)

  // error since no such name
  stream.unsubscribe('unknown')
})

test('unsubscribe - existing name', t => {
  const stream = new Stream('x', eventGenerator)
  stream.subscribeOne('a', subscriber)

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

  stream.subscribeOne('a', subscriber)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})


test('unsubscribeAll - two', t => {
  const stream = new Stream('x', eventGenerator)

  const subscribers = {
    a: subscriber,
    b: subscriber
  }

  stream.subscribe(subscribers)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

