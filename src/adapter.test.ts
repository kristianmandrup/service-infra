import test from 'ava'
import { Service } from './service'
import { Adapter } from './adapter'
import { Plug } from './plug'

const service = new Service('a')
const adapter = new Adapter('x', service)

test('new Adapter', t => {
  t.is(adapter.constructor, Adapter)
})

test('plugin no plug fails', t => {
  const plug = null

  t.falsy(adapter.plugin(plug))
})

// test('plugin a bad Plug fails', t => {
//   const plug = new Plug('a')

//   t.falsy(adapter.plugin(plug))
// })

// test('plugin a Plug in matching socket works', t => {
//   const plug = new Plug('x')

//   t.truthy(adapter.plugin(plug))
// })
