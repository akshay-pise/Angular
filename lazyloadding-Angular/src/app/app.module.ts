import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingComponent } from './component/eager-loading/eager-loading.component';
import { EagerLoaddingComponentComponent } from './component/eager-loadding-component/eager-loadding-component.component';
console.log("eager loadding")
@NgModule({
  declarations: [
    AppComponent,
    EagerLoadingComponent,
    EagerLoaddingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
