import { Injectable } from '@angular/core'

// @Injectable()
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  consoleData(componentName?: string) {
    console.log(`___LOGGER SERVICE WORKS____ in ___ ${componentName} `)
  }
}
