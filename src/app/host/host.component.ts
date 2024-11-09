import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  // providers: [LoggerService]
})
export class HostComponent implements OnInit{

  constructor(@SkipSelf() private loggerService: LoggerService) {
  }


  ngOnInit() {
    this.loggerService.consoleData()
  }

}
