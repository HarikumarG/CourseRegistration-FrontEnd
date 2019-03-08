import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';
import { UsernameService } from '../username.service';
@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
  user:any= {}
  constructor(private userid: UsernameService, public userloginservice: UserService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
     if(this.user.regno==this.userid.getUserId())
     {
        this.userloginservice.deleteuser(this.user).subscribe(res => {
        this.user = res;
        if (res == "FAILURE") {
          alert("Incorrect Password");
          location.reload();
        }
        else {
          this.router.navigate(['/deleted']);
          }
        });
        }
      else
      {
        alert("Incorrect Register number");
        location.reload();
      }
    }
}
