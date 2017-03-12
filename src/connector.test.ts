import test from 'ava'
import { Connector } from './connector'
import { Input, Output } from './io'

test('new Connector', t => {
  const connector = new Connector('x')
  t.is(connector.constructor, Connector)
})
