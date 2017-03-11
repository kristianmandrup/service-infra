import { StoreService } from './store-service'

export class CacheService extends StoreService {
  constructor() {
    super()
  }

  configure() {
    this.input.subscribe(this)
    this.input.add('requests')
    this.output.add('miss', 'hit')
  }
}
