import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './component/media/media.component';
import { StarComponent } from './component/star/star.component';
import { FilmComponent } from './component/film/film.component';
import { CardScrollerComponent } from './component/card-scroller/card-scroller.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StarComponent,
    FilmComponent,
    CardScrollerComponent
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
