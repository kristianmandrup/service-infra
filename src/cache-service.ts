import { StoreService } from './store-service'

export class CacheService extends StoreService {
  constructor() {
    super()
  }

  configure() {
    this.input.subscribe(this)
    this.input.addStream('requests')
    this.output.addStream('miss', 'hit')
  }
}
