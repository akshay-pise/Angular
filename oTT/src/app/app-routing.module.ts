import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTTDashboardComponent } from './pages/o-ttdashboard/o-ttdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: OTTDashboardComponent,
    children: [
      {
        path: 'films',
        loadChildren: () => import('./pages/film/film.module').then(m => m.FilmModule)
      },
      {
        path: 'media',
        loadChildren: () => import('./pages/media/media.module').then(m => m.MediaModule)
      },
      {
        path: 'music',
        loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
