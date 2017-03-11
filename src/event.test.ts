import test from 'ava'
import { Event } from './event'

test(t => {
  const event = new Event('hello')
  t.is(event.constructor, Event)
})
