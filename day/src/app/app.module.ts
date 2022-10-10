import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EnquiryComponent } from './component/enquiry/enquiry.component';
import { CourseComponent } from './component/course/course.component';
import { CandidateComponent } from './component/candidate/candidate.component';
import { EnrollmentComponent } from './component/enrollment/enrollment.component';
import { PaymentComponent } from './component/payment/payment.component';
import {HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './service/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MasterPageComponent } from './component/master-page/master-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EnquiryComponent,
    CourseComponent,
    CandidateComponent,
    EnrollmentComponent,
    PaymentComponent,
    DashboardComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
