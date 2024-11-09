import {Component, Optional} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-optional',
  standalone: true,
  imports: [],
  templateUrl: './optional.component.html',
  styleUrl: './optional.component.scss'
})
export class OptionalComponent {
  constructor(@Optional() private loggerService: LoggerService){}

  ngOnInit() {
    if(this.loggerService){
      this.loggerService.consoleData()
    } else {
      console.log('Service is not available')
    }
  }
}
