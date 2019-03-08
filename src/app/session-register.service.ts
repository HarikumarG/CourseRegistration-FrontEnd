import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionRegisterService {

  private isUserRegisteredIn;


  constructor() { 
    this.isUserRegisteredIn=false;
  }

  setUserRegisteredIn(){
    this.isUserRegisteredIn=true;
  }
  getUserRegisteredIn()
  {
    return this.isUserRegisteredIn;
  }

}
