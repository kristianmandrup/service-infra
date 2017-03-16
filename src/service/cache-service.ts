import { StoreService } from './store-service'

export class CacheService extends StoreService {
  constructor(name: String) {
    super(name)
  }

  configure() {
    this.input.subscribe(this)
    this.input.addStream('requests')
    this.output.addStream('miss', 'hit')
  }
}
