import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'




})
export class ChildComponent implements OnInit {

  constructor(private loggerService: LoggerService)  {
  }

  ngOnInit() {
    this.loggerService.consoleData()
  }

}
