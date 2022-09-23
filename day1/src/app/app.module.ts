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
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
