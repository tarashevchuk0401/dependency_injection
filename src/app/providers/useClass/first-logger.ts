import { Injectable } from '@angular/core'
import { CustomLogger } from './custom-logger'

@Injectable({
    providedIn:'root'
})
export class FirstLogger extends CustomLogger {
  constructor() {
    console.log('Initialize FirstLogger ')
      super()
  }
  log(message: string): void {
    console.log('FIRST Logger:', message)
  }
}
