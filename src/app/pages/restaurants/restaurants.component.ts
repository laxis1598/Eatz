import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constant } from 'src/app/constants/constant.component';
import { CommonService } from '../../services/commonservice/common.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {


  //initial declarations
  restaurant:any=[];
  filteredrestaurant:any=[];
  restaurantname:string='';
  rating:Array<number>=[];
  i:number=0;
  noresult:boolean=false;
  isFetching=false;
  cardButton:string=Constant.restaurantCardButton
  searchButton:string=Constant.searchButton;

  //constructor
  constructor(private http:HttpClient,private common:CommonService) { 
    this.restaurant=this.common.restaurant;
    if(this.common.restaurantname)
    {
      this.onSearch(this.common.restaurantname);
    }
  }

  //ngoninit
  ngOnInit(): void {
     this.fetchRestaurants();
  }

  //logic for fetching restaurants 
  fetchRestaurants() {
    this.isFetching=true;
    this.http.get("https://run.mocky.io/v3/59b84146-7de3-4794-8534-8979236ec0bc").subscribe(restaurant=>
    {
      this.isFetching=false;
      this.restaurant=restaurant;
      this.restaurant=this.restaurant.result;
      //random rating
      for(let i=0;i<this.restaurant.length;i++)
      {
        this.rating[i]=parseFloat((Math.random()*5).toFixed(1));
      }
      let i=0;
      for(let restaurant of this.restaurant)
      {
        restaurant.rating=this.rating[i];
        i++;
      }
    });
}

  //logic for showing the filtered restaurants
  onSubmit(form:NgForm)
  {
    this.onSearch(form.value.restaurantname)
  }

  //logic for fetching the filtered restaurants when searched from home page
  onSearch(name:string)
  {
    this.filteredrestaurant=[];
    this.restaurantname=name;
    if(name)
    {
      for(let restaurant of this.restaurant)
      {
         if((restaurant.name.toLowerCase()).includes(this.restaurantname.toLowerCase()))
         {
          
          this.filteredrestaurant.push(restaurant);
         }
      }
      if(this.filteredrestaurant=='')
      {
        this.noresult=true;
      }
      else {
        this.noresult=false;
      }
    }
    else {
      this.noresult=false;
    }
    this.common.restaurantname='';
  }
}
