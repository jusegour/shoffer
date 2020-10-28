import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'vendedor',
        loadChildren: () => import('./pages/vendedor/vendedor.module').then(m => m.VendedorModule)
      },
      {
        path: 'domiciliario',
        loadChildren: () =>
          import('./pages/domiciliario/domiciliario.module').then(m => m.DomiciliarioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
