import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoggerModifiedService {
  constructor() {
    console.log('Logger service modified')

  }

  consoleData() {
    console.log('Logger service modified')
  }
}
