import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

   offer:any=[];
  
  constructor(private http:HttpClient,private common:CommonService) { 
    this.common.fetchOffers;
    this.offer=this.common.offer;
    this.fetchOffers();
  }


  ngOnInit(): void {
     
  }

  private fetchOffers() {
    this.http.get("https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366").subscribe(offers=>
    {
      this.offer=offers;
      console.log(typeof(this.offer.result));
      this.offer=this.offer.result;
     
    });
  }
  addtocart(item:any){
    this.common.count=this.common.count+1;
    this.common.cartitem.push(item);
    this.common.cart.emit(true);

  }


}
