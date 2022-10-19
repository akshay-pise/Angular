import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './component/gallery-page/gallery-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { SettingsPageComponent } from './component/settings-page/settings-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
