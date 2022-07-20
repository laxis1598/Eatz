import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/commonservice/common.service';
import { LoggingService } from '../../services/loggingservice/logging.service';
import { Constant } from 'src/app/constants/constant.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  //subscriptions
  loginsubscription:Subscription;
  cartsubscription:Subscription;

  //initial declarations
  LoginValid:string|null=localStorage.getItem("login");
  cartitem:number=0;
  homeNavigation:string=Constant.homeNavigation;
  offersNavigation:string=Constant.offersNavigation;
  restaurantsnavigation:string=Constant.restaurantsNavigation;
  ordersNavigation:string=Constant.ordersNavigation;
  accountsNavigation:string=Constant.accountsNavigation;
  appTitle:string=Constant.appTitle;


  constructor(private loggingService:LoggingService,private common:CommonService) { 

    //logging service subscribe for checking the login status
   this.loginsubscription= this.loggingService.loginValid.subscribe(
      (loginStatus:boolean)=>{
        if(loginStatus)
        {
          localStorage.setItem("login","true")
          this.LoginValid=localStorage.getItem("login");
          this.loggingService.login=true;
        }
        else
        {
          localStorage.setItem("login","");
          this.LoginValid=localStorage.getItem("login");
        }
    })

    this.cartitem= this.common.count;

    //common service subscribe for showing cart item-count
    this.cartsubscription=this.common.cart.subscribe(
      (cart:boolean)=>{
        if(cart)
        {
          this.cartitem=this.common.count;
        }
    })
  }
  //end of constructor

  
  //ngOnInit
  ngOnInit(): void {
  }

  //onDestroy 
  ngOnDestroy(): void {
    this.loginsubscription.unsubscribe();
    this.cartsubscription.unsubscribe();
  }



  //logout logic
  onLogOut() {
    this.loggingService.loginValid.emit(false);
  }
  
}
