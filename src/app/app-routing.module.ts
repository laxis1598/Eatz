import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { OffersComponent } from './pages/offers/offers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

//route paths
const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'offers',component:OffersComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'',component:LandingpageComponent},
  {path:'not-found',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
