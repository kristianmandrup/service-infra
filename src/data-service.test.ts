import test from 'ava'
import { DataService } from './data-service'

test(t => {
  const service = new DataService()
  t.is(service.constructor, DataService)
})
