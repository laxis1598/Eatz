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
  onSubmit () {
    //input empty check
    console.log(this.loginForm);
}

}

