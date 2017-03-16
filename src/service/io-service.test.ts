import test from 'ava'
import { IOService } from './io-service'
import { Input, Output } from './io'

test('new', t => {
  const service = new IOService('x')
  t.is(service.constructor, IOService)
})

test('Input', t => {
  const service = new IOService('x')

  t.is(service.input.constructor, Input)
})

test('Output', t => {
  const service = new IOService('x')

  t.is(service.output.constructor, Output)
})
