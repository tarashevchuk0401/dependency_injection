import {Component, Host, OnInit, Optional, SkipSelf} from '@angular/core';
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-host-child',
  standalone: true,
  imports: [],
  templateUrl: './host-child.component.html',
  styleUrl: './host-child.component.scss',
})
export class HostChildComponent implements  OnInit{

  constructor(private loggerService: LoggerService) {}


  ngOnInit() {
  this.loggerService.consoleData(HostChildComponent.name)
  }


}
