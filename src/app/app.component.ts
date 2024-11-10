import { Component, Inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { OptionalComponent } from './optional/optional.component'
import { SelfComponent } from './self/self.component'
import { HostComponent } from './host/host.component'
import { LoggerService } from './services/logger.service'
import { HostChildComponent } from './host/host-child/host-child.component'
import { CustomLogger } from './providers/useClass/custom-logger'
import { FirstLogger } from './providers/useClass/first-logger'
import { SecondLogger } from './providers/useClass/second.logger'
import { APP_CONFIG, AppConfig, appConfig } from './providers/useValue/config'
import { UseValueComponent } from './providers/useValue/use-value/use-value.component'
import {LoggerModifiedService} from "./services/logger-modified.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OptionalComponent,
    HostComponent,
    SelfComponent,
    HostChildComponent,
    UseValueComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [

    {
      provide: APP_CONFIG,
      useValue: appConfig,
    },
    {
      provide: CustomLogger,
      useFactory: (config: AppConfig) => {
        return config.experimantalEnabled ? new FirstLogger() : new SecondLogger()
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class AppComponent implements OnInit {

  constructor(
    private customLogger: CustomLogger,
    // @Inject(APP_CONFIG) private config: AppConfig,
  ) {}

  ngOnInit() {
    // this.loggerService.consoleData()
    // this.customLogger.log('AppComponent')
  }
}
