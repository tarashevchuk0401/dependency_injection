import {Component, OnInit, Optional} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-optional',
  standalone: true,
  imports: [],
  templateUrl: './optional.component.html',
  styleUrl: './optional.component.scss'
})
export class OptionalComponent implements OnInit{
  constructor( @Optional() private loggerService: LoggerService){}

  ngOnInit() {
    if(this.loggerService){
      this.loggerService.consoleData(OptionalComponent.name)
    } else {
      console.log('__Logger Service is NOT AVAILABLE__')
    }
  }
}
