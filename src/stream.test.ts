import test from 'ava'
import { StreamService } from './stream-service'
import { Stream } from './stream'
import { Connector } from './connector'
import { Subject, Subscription, Subscriber } from '@reactivex/rxjs'

const badSubscriber = (x) => {
  console.log(x)
}

const namedSubscriber = {
  name: 'a',
  cb: (x) => {
    console.log(x)
  }
}

const otherSubscriber = {
  name: 'b',
  cb: (x) => {
    console.log(x)
  }
}

test('new', t => {
  const stream = new Stream('x')
  t.is(stream.constructor, Stream)
})

test('subscribe - no name', t => {
  const stream = new Stream('x')
  // error since no name
  stream.subscribe(badSubscriber)
})

test('subscribe - subscriber with name', t => {
  const stream = new Stream('x')
  const subscriber = (x) => {
    console.log(x)
  }
  // good subscriber with name
  stream.subscribe(namedSubscriber)
})


test('unsubscribe - uknown name', t => {
  const stream = new Stream('x')
  stream.subscribe(namedSubscriber)

  // error since no such name
  stream.unsubscribe('unknwon')
})

test('unsubscribe - existing name', t => {
  const stream = new Stream('x')
  stream.subscribe(namedSubscriber)

  // correct name
  stream.unsubscribe('a')
})

test('unsubscribeAll - none', t => {
  const stream = new Stream('x')

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})

test('unsubscribeAll - one', t => {
  const stream = new Stream('x')

  const namedSubscriber = {
    name: 'logger',
    cb: (x) => {
      console.log(x)
    }
  }

  stream.subscribe(namedSubscriber)

  // no subscribers to unsubscribe
  stream.unsubscribeAll()
})


test('unsubscribeAll - multiple', t => {
  const stream = new Stream('x')

  // no subscribers to unsubscribe
  stream.unsubscribeAll()

  stream.subscribe(namedSubscriber, otherSubscriber)

  // error since no name
  stream.unsubscribeAll()
})

