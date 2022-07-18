import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginStatus:boolean=false;
  title = 'eatz';
  constructor(private loggingService:LoggingService){
    this.loggingService.loginValid.subscribe(
      (loginStatus:boolean)=>this.loginStatus=loginStatus
    )
  }
}
