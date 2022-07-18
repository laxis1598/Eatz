import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private common:CommonService,private router:Router,private http:HttpClient) {
    this.common.locationname.subscribe(location=>{
    this.location=this.common.location;
    }) 
    
  }
  location:string=this.common.location;;
 
   


  ngOnInit(): void {
  }
 
    

}
