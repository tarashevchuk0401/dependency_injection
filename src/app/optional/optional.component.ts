import { Component, OnInit } from '@angular/core'
import { LoggerService } from '../services/logger.service'
import {FirstLogger} from "../providers/useClass/first-logger";
import {CustomLogger} from "../providers/useClass/custom-logger";
import {SecondLogger} from "../providers/useClass/second.logger";

@Component({
  selector: 'app-optional',
  standalone: true,
  imports: [],
  templateUrl: './optional.component.html',
  styleUrl: './optional.component.scss',
  providers: [{
    provide: CustomLogger, useExisting:FirstLogger
  }]
})
export class OptionalComponent implements OnInit {
  constructor(private loggerService: LoggerService, private customLogger: CustomLogger) {}

  ngOnInit() {
    // if (this.loggerService) {
    //   this.loggerService.consoleData(OptionalComponent.name)
    // } else {
    //   console.log('__Logger Service is NOT AVAILABLE__')
    // }
    this.customLogger.log('optional')
  }
}
