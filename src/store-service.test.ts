import test from 'ava'
import { StoreService } from './store-service'

test('new StoreService', t => {
  const service = new StoreService('x')
  t.is(service.constructor, StoreService)
})

