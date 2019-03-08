import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '../../node_modules/@angular/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { RegisteredComponent } from './registered/registered.component';
import { SessionRegisterService} from './session-register.service';
import { AuthguardGuard } from './authguard.guard';
import {AuthguardloginGuard } from './authguardlogin.guard';
import { SessionLoginService } from './session-login.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { DeletedaccountComponent } from './deletedaccount/deletedaccount.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit',canActivate:[AuthguardloginGuard],component: EditaccountComponent },
  { path: 'course',canActivate:[AuthguardloginGuard], component: CourseComponent },
  { path: 'registered',canActivate:[AuthguardGuard], component:RegisteredComponent},
  { path: 'delete',canActivate:[AuthguardloginGuard],component:DeleteaccountComponent},
  { path: 'deleted', canActivate:[AuthguardloginGuard],component:DeletedaccountComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: '', component: HomeComponent , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CourseComponent,
    RegisteredComponent,
    ForgotpasswordComponent,
    DeleteaccountComponent,
    DeletedaccountComponent,
    EditaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers:[SessionRegisterService,AuthguardGuard,AuthguardloginGuard,SessionLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
