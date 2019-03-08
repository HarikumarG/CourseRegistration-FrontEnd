import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionLoginService }from './session-login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardloginGuard implements CanActivate {
  constructor(private loginuser:SessionLoginService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginuser.getUserLoggedIn();
  }
}
