import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoggingService } from './logging.service';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrdersComponent } from './orders/orders.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Container1Component } from './container1/container1.component';
import { BookingcontainerComponent } from './bookingcontainer/bookingcontainer.component';





const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'offers',component:OffersComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'',component:LandingpageComponent},
];
    


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OffersComponent,
    RestaurantsComponent,
    OrdersComponent,
    HomeComponent,
    LandingpageComponent,
    Container1Component,
    BookingcontainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ScrollingModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
