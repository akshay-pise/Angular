import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { HomeComponent } from './component/home/home.component';
import { MaxAmountUsersComponent } from './component/max-amount-users/max-amount-users.component';
import { RecentUsersComponent } from './component/recent-users/recent-users.component';
import { StudentComponent } from './component/student/student.component';
import { TopicsComponent } from './component/topics/topics.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';
import { UsersComponent } from './component/users/users.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    DashboardComponent,
    EmployeeComponent,
    HomeComponent,
    MaxAmountUsersComponent,
    RecentUsersComponent,
    StudentComponent,
    TopicsComponent,
    UserLoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
