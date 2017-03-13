import test from 'ava'
import { ComponentService } from './component-service'
import { Input, Output } from './io'

test('new ComponentService', t => {
  const service = new ComponentService('x')
  t.is(service.constructor, ComponentService)
})
