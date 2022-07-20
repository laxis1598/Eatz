import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  
  //event emitter
  loginValid=new EventEmitter<boolean>();

  //initial declarations
  login:boolean=false;

  //sample password & username
  username1:string='laxis'
  username2:string='laxman'
  password1:string='laxis'
  password2:string='laxman'

  //constructor
  constructor() {
    //user login check
    if(localStorage.getItem("login"))
    {
      this.login=true;
    }
   }

}
