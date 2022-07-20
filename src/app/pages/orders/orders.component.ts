import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/commonservice/common.service';
import { Constant } from 'src/app/constants/constant.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders:any=[];
  order:any=[];
  viewDetails:boolean=false;
  orderPrice:number=0;
  subTotal:number=0;
  packingCost:number=0;
  discount:number=0;
  isFetching=false;
  viewDetailsButton:string=Constant.viewDetailsButton;
  trackOrder:string=Constant.trackOrderButton;
  cancelOrder:string=Constant.cancelOrderButton;

  constructor(private http:HttpClient,private common:CommonService) { 
  }

  

  ngOnInit(): void {
    this.fetchOrders();
  }



  private fetchOrders() {
    this.isFetching=true;
    this.http.get("https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6").subscribe(orders=>
    {
      this.isFetching=false;
      this.orders=orders;
      this.orders=this.orders.orders;
    });
  }

  onViewDetails(order:any) {
    this.order=order;
    this.viewDetails=true;
    this.orderPrice=order.price.total;
    this.subTotal=order.price.subTotal;
    this.discount=order.price.discount;
    this.packingCost=order.price.packingCost;
  }
  close() {
    this.viewDetails=false;
  }
}
