import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './Component/calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';
import { NameListComponent } from './Component/name-list/name-list.component';
import { VariableComponent } from './Component/variable/variable.component';
import { PropertycompoComponent } from './Component/propertycompo/propertycompo.component';
import { NgifComponentComponent } from './Component/ngif-component/ngif-component.component';
import { NgforComponent } from './Component/ngfor/ngfor.component';
import { NgstyleComponent } from './Component/ngstyle/ngstyle.component';
import { LoginPageComponent } from './task/login-page/login-page.component';
import { ValidationformComponent } from './Component/validationform/validationform.component';
import {HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './Component/http-client/http-client.component';
import { PipeComponent } from './Component/pipe/pipe.component';
import { Http2Component } from './Component/http2/http2.component';
import { Http3Component } from './Component/http3/http3.component';
import { Http4Component } from './Component/http4/http4.component';
import { Http5Component } from './Component/http5/http5.component';
import { CustpipePipe } from './Component/custpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NameListComponent,
    VariableComponent,
    PropertycompoComponent,
    NgifComponentComponent,
    NgforComponent,
    NgstyleComponent,
    LoginPageComponent,
    ValidationformComponent,
    HttpClientComponent,
    PipeComponent,
    Http2Component,
    Http3Component,
    Http4Component,
    Http5Component,
    CustpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
