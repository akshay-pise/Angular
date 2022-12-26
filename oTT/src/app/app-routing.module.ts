import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./pages/film/film.module').then(m => m.FilmModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/media/media.module').then(m => m.MediaModule)
  },
  { path: 'music',
   loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
