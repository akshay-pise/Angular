import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './component/candidate/candidate.component';
import { CourseComponent } from './component/course/course.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EnquiryComponent } from './component/enquiry/enquiry.component';
import { EnrollmentComponent } from './component/enrollment/enrollment.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MasterPageComponent } from './component/master-page/master-page.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'candidate',
        component: CandidateComponent
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'enquiry',
        component: EnquiryComponent
      },
      {
        path: 'enrollment',
        component: EnrollmentComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'masterPage',
        component: MasterPageComponent
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
