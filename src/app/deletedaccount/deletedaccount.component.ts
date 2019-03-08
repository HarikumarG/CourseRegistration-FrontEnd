import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionLoginService } from '../session-login.service';
@Component({
  selector: 'app-deletedaccount',
  templateUrl: './deletedaccount.component.html',
  styleUrls: ['./deletedaccount.component.css']
})
export class DeletedaccountComponent implements OnInit {

  constructor(public router:Router,private loginuser: SessionLoginService) { }

  ngOnInit() {
  }
  ongoback()
  {
    location.reload();
    this.router.navigate(['/']);
  }
}
