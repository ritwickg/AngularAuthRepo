import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from "src/app/auth-user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authSvc : AuthUserService, private router : Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(sessionStorage.getItem('web_token'))
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
      
  }
}
