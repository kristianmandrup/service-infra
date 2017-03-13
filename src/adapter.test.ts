import test from 'ava'
import { Service } from './service'
import { Adapter } from './adapter'
import { Plug } from './plug'

const service = new Service('a')
const adapter = new Adapter(service)
adapter.configSockets('a', 'b')
const badPlug = new Plug('_', service)
const goodPlug = new Plug('b', service)

test('new Adapter', t => {
  t.is(adapter.constructor, Adapter)
})

test('plugFits null fails', t => {
  t.falsy(adapter.plugFits(null))
})

test('plugFits bad plug fails', t => {
  const plug = null
  t.falsy(adapter.plugFits(badPlug))
})

test('plugFits matching plug works', t => {
  const plug = null
  t.truthy(adapter.plugFits(goodPlug))
})

test('plugin no plug fails', t => {
  const plug = null

  t.falsy(adapter.plugin(plug))
})

test('plugin a bad Plug fails', t => {
  t.falsy(adapter.plugin(badPlug))
})

test('plugin a Plug in matching socket works', t => {
  t.truthy(adapter.plugin(goodPlug))
})
