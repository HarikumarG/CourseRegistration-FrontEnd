import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  private isUserLoggedIn;

  constructor() {

    this.isUserLoggedIn=false;

   }
   setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn()
  {
    return this.isUserLoggedIn;
  }
}
