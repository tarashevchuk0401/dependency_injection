import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoggerModifiedService {
  constructor() {}

  consoleData() {
    console.log('alfa service modified')
  }
}
