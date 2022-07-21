import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../../services/loggingservice/logging.service';
import { Constant } from 'src/app/constants/constant.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  //initial declarations
  isNameEmpty=false;
  isPasswordEmpty=false;
  loginButton:string=Constant.loginButton;
  usernameEmpty:string=Constant.usernameEmpty;
  passwordEmpty:string=Constant.passwordEmpty;
  invalidCredentials:string=Constant.invalidCredentials;
  valid:boolean=true;

  //constructor
  constructor(private loggingService: LoggingService,private router:Router) {
   }

   //ngOnInit
  ngOnInit(): void {
    this.loggingService.loginValid.emit(false);
    this.loginForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null),
    })
  }

  //logic check logic
  onSubmit (form:NgForm) {
    //input empty check
    if(form.value.username && form.value.password)
    {
      this.isNameEmpty=false;
      this.isPasswordEmpty=false;
      //username,password-combination  check 
      if((form.value.username==this.loggingService.username1 && form.value.password==this.loggingService.password1) ||  
      (form.value.username==this.loggingService.username2 && form.value.password==this.loggingService.password2) )
      {
        this.loggingService.loginValid.emit(true);
        localStorage.setItem("login","true");
        this.router.navigateByUrl("/home");
        this.valid=true;
        form.reset();
      }
      else {
        this.valid=false;
      }
      
    }
    //password empty check
    else if(form.value.username){
      this.isNameEmpty=false;
      this.isPasswordEmpty=true;
    }
    //username empty check
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

