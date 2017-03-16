import test from 'ava'
import { Service } from './service'

function createService(name: string, input, output) {
  return new Service(name, { input, output })
}


const service = createService('subject', ['y'], ['x'])

const targetService = {
  compatible: createService('compatible', ['x'], ['y']),
  incompatible: createService('incompatible', ['x'], ['a'])
}

test('new Service', t => {
  t.is(service.constructor, Service)
})

test('connect Service to incompatible Service', t => {
  const service = new Service('z')
  t.is(service.constructor, Service)
})

test('connect Service to compatible Service', t => {
  const service = new Service('z')
  const compatibleService = new Service('z')
  t.is(service.constructor, Service)
})


test('connect Service to compatible Service', t => {
  const service = new Service('z')

  t.is(service.constructor, Service)
})


