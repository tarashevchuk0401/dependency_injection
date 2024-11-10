import { Component, Inject, OnInit } from '@angular/core'
import { APP_CONFIG, AppConfig, appConfig } from '../config'

@Component({
  selector: 'app-use-value',
  standalone: true,
  imports: [],
  templateUrl: './use-value.component.html',
  styleUrl: './use-value.component.scss',
  providers: [
    { provide: 'API_URL', useValue: 'https://api.example.com' },
  ],
})
export class UseValueComponent implements OnInit {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, @Inject('API_URL') private apiUrl: string) {}

  ngOnInit() {
    console.log(this.config)
    console.log(this.apiUrl)
  }
}
