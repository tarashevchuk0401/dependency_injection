import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OptionalComponent} from "./optional/optional.component";
import {SelfComponent} from "./self/self.component";
import {HostComponent} from "./host/host.component";
import {LoggerService} from "./services/logger.service";
import {ParentComponent} from "./parent/parent.component";
import {HostChildComponent} from "./host/host-child/host-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OptionalComponent, HostComponent, SelfComponent, ParentComponent, HostChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LoggerService]

})
export class AppComponent {
  title = 'dependency_injection';
}
