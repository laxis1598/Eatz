import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //initial declarations
  restaurant:any=[];
  restaurantname:string='';
  location:string='';
  rating:Array<number>=[];
  orders:any=[];
  offer:any=[];
  count:number=0;
  cartitem:any=[];

  //toprestaurants array
  toprestaurants:Array<any>=[
    {
      name:"Fire Water",
      description:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
      imageurl:"https://i.pinimg.com/originals/ce/b5/35/ceb53556c33d9a2b81c19a79e5dd7c11.jpg"
    },
    {
      name:"The Wonton",
      description:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
      imageurl:"https://i.pinimg.com/originals/ce/b5/35/ceb53556c33d9a2b81c19a79e5dd7c11.jpg"
    },
  ]

  //constructor
  constructor(private http:HttpClient) { 
    this.fetchRestaurants();
  }
  //event emitters
  locationname=new EventEmitter<boolean>();
  restaurantsearch=new EventEmitter<boolean>();
  cart=new EventEmitter<boolean>();
 

  //for fetching all the restaurants
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

}
