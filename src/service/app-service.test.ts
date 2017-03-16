import test from 'ava'
import { AppService } from './app-service'
import { Input, Output } from './io'

test('new AppService', t => {
  const service = new AppService('x')
  t.is(service.constructor, AppService)
})
