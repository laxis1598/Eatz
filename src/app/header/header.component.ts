import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private loggingService:LoggingService,private common:CommonService) { 

    //logging service subscribe for checking the login status
    this.loggingService.loginValid.subscribe(
      (loginStatus:boolean)=>{
        if(loginStatus)
        {
          localStorage.setItem("login","true")
          this.LoginValid=localStorage.getItem("login");
        }
        else
        {
          localStorage.setItem("login","");
          this.LoginValid=localStorage.getItem("login");
        }

    })
    this.cartitem= this.common.count;

    //common service subscribe for showing cart item-count
    this.common.cart.subscribe(
      (cart:boolean)=>{
        if(cart)
        {
          this.cartitem=this.common.count;
        }
    })
  }

  LoginValid:string|null=localStorage.getItem("login");
  cartitem:number=0;

  ngOnInit(): void {
  }

  //logout logic
  onLogOut() {
    this.loggingService.loginValid.emit(false);
  }
  
}
