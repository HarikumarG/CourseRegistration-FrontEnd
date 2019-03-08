import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
import { SessionLoginService } from '../session-login.service';
import { UsernameService } from '../username.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= {}
  constructor(public userloginservice: UserService, public router: Router, private loginuser: SessionLoginService, private userid: UsernameService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.userloginservice.CheckUser(this.user).subscribe(user => {
    this.user = user;
      if (user == "FAILURE") {
        alert("Incorrect Email Id or Password");
        location.reload();
      }
      else {
        var num = JSON.parse(user);
        this.loginuser.setUserLoggedIn();
        this.userid.setUserId(num);
        this.router.navigate(['/course']);
      }
    });
  }
  onhomeclick(){
    this.router.navigate(['/']);
  }
}
