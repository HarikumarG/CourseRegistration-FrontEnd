import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  user:any = {}
  verify:any={}
  add:any={}
  showcode: boolean = false;
  showemail:boolean = true;
  showpass:boolean=false;
  constructor(public forgotpass:UserService,public router : Router) { 
  }

  ngOnInit() {
  }
  onSubmit() {
    this.verify.email=this.user.email;
    this.forgotpass.CheckEmail(this.user).subscribe(users => {
    this.user = users;
      if (users === "SUCCESS") {
        this.showcode = true;
        this.showemail=false;
      }
      else {
        alert("This Email id is not registered");
        location.reload();
      }
    });
  }
  oncode(){
    this.add.email=this.verify.email;
    this.forgotpass.CodeVerify(this.verify).subscribe(res => {
      this.verify = res;
      if(res==="SUCCESS"){
        this.showpass=true;
        this.showcode=false;
      }
      else{
        alert("The four digit code is incorrect");
        location.reload();
      }
    });
  }
  onpass()
  {
    this.forgotpass.UpdatePassword(this.add).subscribe(res => {
      this.add = res;
      if(res==="SUCCESS"){
        location.reload();
        this.router.navigate(['/login']);
      }
      else{
        alert("The Password is not updated");
        location.reload();
      }
    });
  }
}
