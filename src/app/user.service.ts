import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: Http) { }

  AddUser(useradd) {
    return this.http.post("/iit-bombay-course/register", useradd).pipe(map(res => res.json()));
  }
  CheckUser(usercheck) {
    return this.http.post("/iit-bombay-course/login", usercheck).pipe(map(res => res.json()));
  }
  CourseRegister(register) {
    return this.http.post("/iit-bombay-course/courseregister", register).pipe(map(res => res.json()));
  }
  CourseUnRegister(register) {
    return this.http.post("/iit-bombay-course/courseunregister", register).pipe(map(res => res.json()));
  }
  CourseStatus(register) {
    return this.http.post("/iit-bombay-course/coursestatus", register).pipe(map(res => res.json()));
  }
  CheckEmail(usercheck) {
    return this.http.post("/iit-bombay-course/forgotpassword", usercheck).pipe(map(res => res.json()));
  }
  CodeVerify(verify) {
    return this.http.post("/iit-bombay-course/codeverify", verify).pipe(map(res => res.json()));
  }
  UpdatePassword(add) {
    return this.http.post("/iit-bombay-course/updatepassword", add).pipe(map(res => res.json()));
  }
  deleteuser(user)
  {
    return this.http.post("/iit-bombay-course/deleteuser",user).pipe(map(res => res.json()));
  }
  Profiledata(user)
  {
    return this.http.post("/iit-bombay-course/profiledata",user).pipe(map(res => res.json()));
  }
  EditUser(user)
  {
    return this.http.post("/iit-bombay-course/edituser",user).pipe(map(res => res.json()));
  }

}
