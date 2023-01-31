import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './component/new-user/new-user.component';
import { UserLayoutComponent } from './component/user-layout/user-layout.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserLayoutComponent
  },
  {
    path:'userlist',
    component:UserListComponent
  },
  {
    path:'newuser',
    component:NewUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
