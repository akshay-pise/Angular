import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerLoaddingComponentComponent } from './component/eager-loadding-component/eager-loadding-component.component';
import { EagerLoadingComponent } from './component/eager-loading/eager-loading.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod =>mod.AdminModule)
  },
  {
    path:'eager',
    component:EagerLoadingComponent
  },
  {
    path:'eager2',
    component:EagerLoaddingComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
