import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedcomponent/header/header.component';
import { LoggingService } from './services/loggingservice/logging.service';
import { LoginComponent } from './pages/login/login.component';
import { OffersComponent } from './pages/offers/offers.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { OrdersComponent } from './pages/orders/orders.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HomeComponent } from './pages/home/home.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

import { SocialmediaComponent } from './sharedcomponent/socialmedia/socialmedia.component';
import { SearchcontainerComponent } from './sharedcomponent/searchcontainer/searchcontainer.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingcontainerComponent } from './sharedcomponent/bookingcontainer/bookingcontainer.component';
import { ExplorecontainerComponent } from './sharedcomponent/explorecontainer/explorecontainer.component';
import { Constant } from './constants/constant.component';



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
    BookingcontainerComponent,
    SocialmediaComponent,
    SearchcontainerComponent,
    PagenotfoundComponent,
    ExplorecontainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [LoggingService,Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
