import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UsernameService } from '../username.service';
import { Router } from '../../../node_modules/@angular/router';
import { SessionLoginService } from '../session-login.service';
@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {

  user: any = {}
  constructor(public courseupdate: UserService, private userid: UsernameService,public router : Router,private loginuser: SessionLoginService) {
    this.user.regno = this.userid.getUserId();
    var register: any = {}
    register.regno = this.userid.getUserId();
     this.courseupdate.Profiledata(register).subscribe(res => {
      register = res;
      if (res == "FAILURE") {
        alert("Could not load Register data");
        location.reload();
      }
      else {
        for (let i of res) {
          this.user.name = i["name"];
          this.user.initial = i["initial"];
          this.user.dept = i["dept"];
          this.user.year = i["year"];
          this.user.section = i["section"];
          this.user.email = i["email"];
          this.user.password = i["password"];
          this.user.mobileno = i["mobileno"];
          this.user.gender = i["gender"];
        }
      }
    });

  }
  onSubmit() {
    this.courseupdate.EditUser(this.user).subscribe(user => {
      this.user = user; if (user == "SUCCESS") {
        alert("Profile updated successfully");
        location.reload();
        this.router.navigate(['/']);
      }
      else
      {
        alert("The Registration is Unsuccessful");
        location.reload();
      }
      });
  }
  ngOnInit() {
  }

}
