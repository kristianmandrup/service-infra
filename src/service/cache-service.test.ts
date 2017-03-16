import test from 'ava'
import { CacheService } from './cache-service'
import { Input, Output } from './io'

test('new CacheService', t => {
  const service = new CacheService('x')
  t.is(service.constructor, CacheService)
})
