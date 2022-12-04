import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReustableComponent } from './reusecomp/reustable/reustable.component';
import { ParecompComponent } from './component/parecomp/parecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ReustableComponent,
    ParecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
