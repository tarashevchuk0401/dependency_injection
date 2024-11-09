import { Injectable } from '@angular/core';

@Injectable()
export class LoggerModifiedService {

    consoleData(){
    console.log('alfa service modified')
  }

  next(){
     console.log('next')
  }

}
