import { Service } from './service'
import { AppService } from './app-service'

export class ComponentService extends Service {

  constructor(name: string) {
    super(name)
  }

  // TODO: ensure output and input streams are connected to backbone
  connectTo(appService: AppService) {
    appService.connect(this)
  }
}
