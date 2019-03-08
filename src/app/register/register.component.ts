import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
import { SessionRegisterService } from '../session-register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {}
  constructor(public userservice: UserService, public router: Router, private reguser: SessionRegisterService) {
  }
  ngOnInit() {
  }
  onSubmit() {
    this.userservice.AddUser(this.user).subscribe(user => {
    this.user = user; if (user == "SUCCESS") {
      this.reguser.setUserRegisteredIn();
      this.router.navigate(['/registered']);
    }
    else
    {
      alert("The Registration is Unsuccessful");
      location.reload();
    }
    });
  }
  onhomeclick(){
    this.router.navigate(['/']);
  }
}
