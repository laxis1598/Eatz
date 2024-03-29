import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/commonservice/common.service';
import { Constant } from 'src/app/constants/constant.component';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit,OnDestroy {

  

  //constructor
  constructor(private common:CommonService,private router:Router,private http:HttpClient) {
  }

  //initial declarations
  private subscription!: Subscription;
  location:string=this.common.location;
  cardButton:string=Constant.toprestaurantCardButton;
  //toprestaurants array fetching from common service
  toprestaurants:Array<any>=this.common.toprestaurants;

  

  ngOnInit(): void {
    this.subscription=this.common.locationname.subscribe(location=>{
      this.location=this.common.location;
      }) 
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    

}
