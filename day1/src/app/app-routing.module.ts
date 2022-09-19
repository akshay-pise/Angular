
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './Component/calculator/calculator.component';
import { NameListComponent } from './Component/name-list/name-list.component';
import { NgifComponentComponent } from './Component/ngif-component/ngif-component.component';
import { PropertycompoComponent } from './Component/propertycompo/propertycompo.component';
import { VariableComponent } from './Component/variable/variable.component';

const routes: Routes = [
  { path: 'calcu', component: CalculatorComponent },
  { path: 'namelist', component: NameListComponent },
  {path:'vari', component: VariableComponent},
  {path:'proBinding', component:PropertycompoComponent},
  {path:'ngif',component:NgifComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }