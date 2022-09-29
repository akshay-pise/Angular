
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './Component/calculator/calculator.component';
import { HttpClientComponent } from './Component/http-client/http-client.component';
import { Http2Component } from './Component/http2/http2.component';
import { Http3Component } from './Component/http3/http3.component';
import { Http4Component } from './Component/http4/http4.component';
import { Http5Component } from './Component/http5/http5.component';
import { NameListComponent } from './Component/name-list/name-list.component';
import { NgforComponent } from './Component/ngfor/ngfor.component';
import { NgifComponentComponent } from './Component/ngif-component/ngif-component.component';
import { NgstyleComponent } from './Component/ngstyle/ngstyle.component';
import { PipeComponent } from './Component/pipe/pipe.component';
import { PropertycompoComponent } from './Component/propertycompo/propertycompo.component';
import { ValidationformComponent } from './Component/validationform/validationform.component';
import { VariableComponent } from './Component/variable/variable.component';
import { LoginPageComponent } from './task/login-page/login-page.component';

const routes: Routes = [
  { path: 'calcu', component: CalculatorComponent },
  { path: 'namelist', component: NameListComponent },
  { path: 'vari', component: VariableComponent },
  { path: 'proBinding', component: PropertycompoComponent },
  { path: 'ngif', component: NgifComponentComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'ngstyle', component: NgstyleComponent },
  { path: 'validation', component: ValidationformComponent },
  { path: 'httpclient', component: HttpClientComponent },
  { path: 'http2', component: Http2Component },
  { path: 'http3', component: Http3Component },
  { path: 'http4', component: Http4Component },
  { path: 'http5', component: Http5Component },
  { path: 'pipe', component: PipeComponent },
  { path: 'loginpage', component: LoginPageComponent },
  { path: '', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }