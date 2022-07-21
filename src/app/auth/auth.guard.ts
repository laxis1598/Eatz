import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoggingService } from "../services/loggingservice/logging.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    //constructor
    constructor(private loggingService:LoggingService,private router:Router){
    }


    //canActivate for login check
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       console.log(this.loggingService.login)
        if(this.loggingService.login)
        {
            return true;
        }
        this.router.navigateByUrl("/login");
        return false;
    }
}