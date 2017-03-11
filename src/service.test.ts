import test from 'ava'
import { Service } from './service'

test(t => {
  const service = new Service()
  t.is(service.constructor, Service)
})
