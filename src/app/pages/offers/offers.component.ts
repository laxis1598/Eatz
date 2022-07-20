import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/commonservice/common.service';
import { Constant } from 'src/app/constants/constant.component';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  //initial declarations
   offer:any=[];
   isFetching=false;
   cardButton:string=Constant.offerscardButton;
  
   //constructor
  constructor(private http:HttpClient,private common:CommonService) { 
    this.fetchOffers();
  }


  ngOnInit(): void {
     
  }

  //logic for fetching the offers
  private  fetchOffers() {
    this.isFetching=true;
     this.http.get("https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366").subscribe(offers=>
    {
      this.isFetching=false;
      this.offer=offers;
      console.log(typeof(this.offer.result));
      this.offer=this.offer.result; 
    });
  }

  //adding the item to cart
  addtocart(item:any){
    this.common.count=this.common.count+1;
    this.common.cartitem.push(item);
    this.common.cart.emit(true);
  }
}
