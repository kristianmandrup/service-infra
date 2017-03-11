import test from 'ava'
import { DataService } from './data-service'
import { Input, Output } from './io'

test('new', t => {
  const service = new DataService('x')
  t.is(service.constructor, DataService)

  t.is(service.input.constructor, Input)
})
