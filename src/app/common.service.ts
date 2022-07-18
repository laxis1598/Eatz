import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  restaurant:any=[];
  location:string='';
  rating:Array<number>=[];
  orders:any=[];
  offer:any=[];
  count:number=0;
  cartitem:any=[];
  constructor(private http:HttpClient) { 
    this.fetchRestaurants();
    this.fetchOrders();
    this.fetchOffers();
  }
  locationname=new EventEmitter<boolean>();
  restaurantsearch=new EventEmitter<boolean>();
  cart=new EventEmitter<boolean>();
 
  restaurantname:string='';


   fetchOffers() {
    this.http.get("https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366").subscribe(offers=>
    {
      this.offer=offers;
      this.offer=this.offer.result;
    });
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
 fetchOrders() {
  this.http.get("https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6").subscribe(orders=>
  {
    this.orders=orders;
    this.orders=this.orders.orders;
  });
}
}
