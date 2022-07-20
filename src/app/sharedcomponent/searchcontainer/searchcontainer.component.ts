import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/commonservice/common.service';
import { Constant } from 'src/app/constants/constant.component';

@Component({
  selector: 'app-searchcontainer',
  templateUrl: './searchcontainer.component.html',
  styleUrls: ['./searchcontainer.component.scss']
})
export class SearchcontainerComponent implements OnInit {

  @ Input() component:string='';

  constructor(private common:CommonService,private router:Router,private http:HttpClient) { 
  }

  //initial declarations
  location:string='';
  locationName:any=[];
  city:string='';
  lat:number=0;
  lon:number=0;
  date:string='';
  cardButton:string=Constant.searchButton;

  ngOnInit(): void {
    this.locationApi();
    console.log(this.component);
  }

     //fetchlocationname logic 
     private fetchLocationName = async (lat:number,lng:number) => {
      await fetch(
        'https://www.mapquestapi.com/geocoding/v1/reverse?key=G1moSFJkXvMTf7kCVqTOPMh1SxtvJaGi&location='+lat+'%2C'+lng+'&outFormat=json&thumbMaps=false',
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.location=responseJson.results[0].locations[0].adminArea3;
          this.common.location=this.location;
          this.common.locationname.emit(true);
        });
    };
     
    // logic for fetching the location from api
    private locationApi(){
        this.http.get("https://geolocation-db.com/json/").subscribe(location=>{
          this.locationName=location;
          this.city=this.locationName.city;
          this.lat=this.locationName.latitude;
          this.lon=this.locationName.longitude;
          this.fetchLocationName(this.lat,this.lon);
        })
    }
  
    //restaurant search logic
    onSearch(form:NgForm) {
     this.common.restaurantsearch.emit(true);
     this.common.restaurantname=form.value.restaurant;
     this.router.navigateByUrl("/restaurants");
    }

}

