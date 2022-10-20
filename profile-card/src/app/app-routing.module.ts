import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from './component/gallery-page/gallery-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { SettingsPageComponent } from './component/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },

  {
    path: '',
    component: HomePageComponent,
    // canActivate:[AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'gallery',
        component: GalleryPageComponent
      },
      {
        path: 'setting',
        component: SettingsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
