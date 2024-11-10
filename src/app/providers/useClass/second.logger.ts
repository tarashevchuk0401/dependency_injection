import { Injectable } from '@angular/core'
import { CustomLogger } from './custom-logger'

@Injectable()
export class SecondLogger extends CustomLogger {
    constructor() {
        super();
        console.log('SECOND Logger:');

    }
    log(message: string): void {
        console.log('SECOND Logger:', message);
    }
}
