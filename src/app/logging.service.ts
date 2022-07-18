import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  
  loginValid=new EventEmitter<boolean>();
  login:boolean=false;
  username1:string='laxis'
  username2:string='laxman'
  password1:string='laxis'
  password2:string='laxman'
  constructor() { }

  
}
