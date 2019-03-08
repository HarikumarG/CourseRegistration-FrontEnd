import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(public router : Router) { }

  ngOnInit() {
  }
  onloginform()
  {
    this.router.navigate(['/login']);
  }
  onregisterform()
  {
    this.router.navigate(['/register']);
  }
}
