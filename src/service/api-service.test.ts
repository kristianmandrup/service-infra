import test from 'ava'
import { ApiService } from './api-service'

test('new ApiService', t => {
  const service = new ApiService('x')
  t.is(service.constructor, ApiService)
})
