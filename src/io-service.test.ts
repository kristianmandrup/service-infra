import test from 'ava'
import { IOService } from './io-service'

test(t => {
  const service = new IOService()
  t.is(service.constructor, IOService)
})
