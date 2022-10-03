import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpageComponent } from './component/webpage/webpage.component';

const routes: Routes = [
  { path: '', component: WebpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
