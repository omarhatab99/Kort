import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'department', loadChildren: () => import('./department/department.module')
      .then(m => m.DepartmentModule)
  },
  {
    path: 'shop', loadChildren: () => import('./shopping/shopping.module')
      .then(m => m.ShoppingModule)
  },
  {
    path: 'support', loadChildren: () => import('./support/support.module')
      .then(m => m.SupportModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
