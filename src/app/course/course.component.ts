import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UsernameService } from '../username.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  user: string
  course: any
  constructor(public courseregister: UserService, public router: Router,private userid: UsernameService) {
    this.user = this.userid.getUserId();
    var register: any = {}
    register.regno = this.user;
    this.course = [{ 'id': '1', 'name': 'C', 'status': 'Register' },
    { 'id': '2', 'name': 'C++', 'status': 'Register' },
    { 'id': '3', 'name': 'Linux', 'status': 'Register' },
    { 'id': '4', 'name': 'Java', 'status': 'Register' },
    { 'id': '5', 'name': 'Pearl', 'status': 'Register' },
    { 'id': '6', 'name': 'Python', 'status': 'Register' },
    { 'id': '7', 'name': 'Php', 'status': 'Register' },
    { 'id': '8', 'name': 'Scilab', 'status': 'Register' }
    ];
    this.courseregister.CourseStatus(register).subscribe(res => {
      register = res;
      for (let i of res) {
        let re = i["courseid"];
        var target = this.course.find(temp => temp.id == re)
        if (target) {
          target.status = 'UnRegister';
        }
      }
    });
  }
  ngOnInit() {
  }
  ongoback() {
    location.reload();
    this.router.navigate(['/login']);
  }
  ondata(event, coursenum: string) {
    if (event.srcElement.innerHTML === 'Register') {
      event.srcElement.innerHTML = "UnRegister";
      var register: any = {}
      register.regno = this.user;
      register.courseid = coursenum;
      this.courseregister.CourseRegister(register).subscribe(res => {
        register = res;
        if(res=="FAILURE")
        {
          alert("The course is not Registered");
        }
      });
    } else if (event.srcElement.innerHTML === 'UnRegister') {
      event.srcElement.innerHTML = "Register";
      var register: any = {}
      register.regno = this.user;
      register.courseid = coursenum;
      this.courseregister.CourseUnRegister(register).subscribe(res => {
        register = res;
        if(res=="FAILURE")
        {
          alert("The course is not Unregistered");
        }
      });
    }

  }
}