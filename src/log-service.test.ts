import test from 'ava'
import { LogService } from './log-service'

test('new LogService', t => {
  const service = new LogService('x')
  t.is(service.constructor, LogService)
})

