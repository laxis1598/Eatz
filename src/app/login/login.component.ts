import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isNameEmpty=false;
  isPasswordEmpty=false;

  constructor(private loggingService: LoggingService,private router:Router) {
    this.loggingService.loginValid.emit(false);
   }

  ngOnInit(): void {
  }

  onSubmit (form:NgForm) {
    if(form.value.username && form.value.password)
    {
      if((form.value.username==this.loggingService.username1 && form.value.password==this.loggingService.password1) ||  
      (form.value.username==this.loggingService.username2 && form.value.password==this.loggingService.password2) )
      {
        this.loggingService.loginValid.emit(true);
        localStorage.setItem("login","true");
        this.router.navigateByUrl("/home");
        this.isNameEmpty=false;
        this.isPasswordEmpty=false;
        form.reset();
      }
      else {
        this.isNameEmpty=true;
        this.isPasswordEmpty=true;
      }
      
    }
    else if(form.value.username){
      this.isNameEmpty=false;
      this.isPasswordEmpty=true;
    }
    else if(form.value.password) {
      this.isNameEmpty=true;
      this.isPasswordEmpty=false;
    }
    else
    {
      this.isNameEmpty=true;
      this.isPasswordEmpty=true;
    }
  }
  
}
