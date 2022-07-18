import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurant:any=[];
  filteredrestaurant:any=[];
  restaurantname:string='';
  rating:Array<number>=[];
  i:number=0;
  noresult:boolean=false;
  

  constructor(private http:HttpClient,private common:CommonService) { 
    this.restaurant=this.common.restaurant;
    if(this.common.restaurantname)
    {
      this.onSearch(this.common.restaurantname);
    }
  }

  ngOnInit(): void {
     this.fetchRestaurants();
  }
  fetchRestaurants() {
    this.http.get("https://run.mocky.io/v3/59b84146-7de3-4794-8534-8979236ec0bc").subscribe(restaurant=>
    {
      this.restaurant=restaurant;
      this.restaurant=this.restaurant.result;
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


  onSubmit(form:NgForm)
  {
    this.filteredrestaurant=[];
    this.restaurantname=form.value.restaurantname;
    if(form.value.restaurantname)
    {
      for(let restaurant of this.restaurant)
      {
         if(((restaurant.name).toLowerCase()).includes((this.restaurantname).toLowerCase()))
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
  }
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
