import test from 'ava'
import { IOService } from './io-service'
import { Input, Output } from './io'

test(t => {
  const service = new IOService('x')
  t.is(service.constructor, IOService)

  t.is(service.input.constructor, Input)
  t.is(service.output.constructor, Output)
})
