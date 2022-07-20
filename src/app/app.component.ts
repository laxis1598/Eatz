import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from './services/loggingservice/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //initial declarations
  // loginStatus:boolean=false;
  title = 'eatz';
  constructor(private loggingService:LoggingService){

    // this.subscription=this.loggingService.loginValid.subscribe(
    //   // (loginStatus:boolean)=>this.loginStatus=loginStatus
    // )
  }

  ngOnInit(): void {
    
  }

}
