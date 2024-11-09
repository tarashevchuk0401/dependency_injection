import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../services/logger.service";
import {HostChildComponent} from "./host-child/host-child.component";


@Component({
  selector: 'app-host',
  standalone: true,
  imports: [
    HostChildComponent
  ],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  providers: [LoggerService]
})
export class HostComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    // this.loggerService.consoleData()
  }

}
