import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-bookingcontainer',
  templateUrl: './bookingcontainer.component.html',
  styleUrls: ['./bookingcontainer.component.scss']
})
export class BookingcontainerComponent implements OnInit {

  constructor(private common:CommonService,private router:Router,private http:HttpClient) { 
  }

  //initial declarations
  date:string='';
   today= new Date();
   dd = this.today.getDate();
   mm = this.today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
   yyyy = this.today.getFullYear();
   day:string=(this.dd).toString();
   month:string=(this.mm).toString();
   year:string=(this.yyyy).toString();
   selecteddate:string='';
   selectedTime:string='';
   selectedPerson:string='';
   hours:number=this.today.getHours() 
   min:number=this.today.getMinutes() ;
   h:string=(this.hours).toString();
   m:string=(this.min).toString();
   time:string=this.h+this.m;
   

//ngOnInit 
  ngOnInit(): void {
    this.fetchDate();
    if(this.hours<10)
    {
      this.h="0"+this.h;
    }
    if(this.min<10)
    {
      this.m="0"+this.m;
    }
    this.time=this.h + ":" +this.m
  }

  //fetchDate logic
  private fetchDate() {
    if(this.dd<10){
      this.day="0"+this.day;
    } 
    if(this.mm<10){
      this.month="0"+this.month
    } 
    this.date = this.yyyy+'-'+this.month+'-'+this.day;
   }

  
  //booking form logic
  onBooking(booking:NgForm)
  {
    if(this.selecteddate && this.selectedPerson && this.selectedTime>this.time)
    {
      alert("Your booking is being considered. The team will get back as soon as possible")
      this.router.navigateByUrl("/home");
    }
    else {
      alert("Please enter valid Booking Details");
      this.router.navigateByUrl("/home");
    }
        
  }     
  
}
