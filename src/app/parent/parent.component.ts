import {Component, NgModule} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {LoggerService} from "../services/logger.service";
import {LoggerModifiedService} from "../services/logger-modified.service";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',

  providers: [
    { provide: LoggerService, useExisting: LoggerModifiedService }
  ]

})
export class ParentComponent {

}


// export function myFactory(config: { enableLogging: boolean }) {
//   return new LoggerService(config.enableLogging);
// }

@NgModule({
  // providers: [
  //   { provide: LoggerService, useFactory: myFactory, deps: ['config'] }
  // ]
})
export class AppModule { }
