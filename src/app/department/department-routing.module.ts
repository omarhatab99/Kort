import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartsComponent } from './component/departs/departs.component';

const routes: Routes = [
  { path: ':id', component: DepartsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
