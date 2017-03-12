import test from 'ava'
import { Adapter } from './adapter'
import { Plug } from './plug'

test('new Adapter', t => {
  const adapter = new Adapter('x')
  t.is(adapter.constructor, Adapter)
})

test('plugin no plug fails', t => {
  const adapter = new Adapter('x')
  const plug = null

  t.falsy(adapter.plugin(plug))
})

test('plugin a bad Plug fails', t => {
  const adapter = new Adapter('x')
  const plug = new Plug('a')

  t.falsy(adapter.plugin(plug))
})

test('plugin a Plug in matching socket works', t => {
  const adapter = new Adapter('x')
  const plug = new Plug('x')

  t.truthy(adapter.plugin(plug))
})
