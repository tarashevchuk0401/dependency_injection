import {Component, OnInit, Optional, Self} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-self',
  standalone: true,
  imports: [],
  templateUrl: './self.component.html',
  styleUrl: './self.component.scss',
  providers: [LoggerService]
})
export class SelfComponent implements OnInit{
  constructor(@Self() private loggerService: LoggerService){}

  ngOnInit() {
    this.loggerService.consoleData(SelfComponent.name)
  }

}
