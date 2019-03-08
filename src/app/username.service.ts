import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private loggeduser;

  constructor() { }

  setUserId(val)
  {
    this.loggeduser=val;
  }
  getUserId()
  {
    return this.loggeduser;
  }
}
