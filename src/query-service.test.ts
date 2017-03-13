import test from 'ava'
import { QueryService } from './query-service'

test('new QueryService', t => {
  const service = new QueryService('x')
  t.is(service.constructor, QueryService)
})

