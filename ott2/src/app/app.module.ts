import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { ProfilChatComponent } from './pages/profil-chat/profil-chat.component';
import { InfobarComponent } from './pages/infobar/infobar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatpageComponent,
    ProfilChatComponent,
    InfobarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
