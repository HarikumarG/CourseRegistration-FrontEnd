import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionRegisterService } from '../session-register.service';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

   constructor(public router:Router,private reguser:SessionRegisterService) {
  }

  ngOnInit() {
  }

  ongoback()
  {
    location.reload();
    this.router.navigate(['/']);
  }

  
}
