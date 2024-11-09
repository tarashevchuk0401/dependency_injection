import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  consoleData(){
      console.log('logger service')
  }
}
