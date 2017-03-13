import test from 'ava'
import { Service } from './service'
import { Adapter } from './adapter'
import { Plug } from './plug'

const service = new Service('a')
const plug = new Plug('b', service)

const badAdapter = new Adapter('bad', service)
const goodAdapter = new Adapter('good', service)
goodAdapter.configSockets('a', 'b')

test('new Plug', t => {
  t.is(plug.constructor, Plug)
})

test('plugsInto null fails', t => {
  t.falsy(plug.plugsInto(null))
})

test('plugsInto bad adapter fails', t => {
  t.falsy(plug.plugsInto(badAdapter))
})

test('plugsInto matching plug works', t => {
  t.truthy(plug.plugsInto(goodAdapter))
})

test('plugin no plug fails', t => {
  t.falsy(plug.plugin(null))
})

test('plugin a bad Plug fails', t => {
  t.falsy(plug.plugin(badAdapter))
  t.falsy(plug.inAdapter === badAdapter)
})

test('plugin a Plug in matching socket works', t => {
  t.truthy(plug.plugin(goodAdapter))
  t.is(plug.inAdapter, goodAdapter)
})
