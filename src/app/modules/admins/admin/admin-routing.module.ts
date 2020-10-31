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
      },
      {
        path: 'categoria',
        loadChildren: () =>
          import('./pages/categoria/categoria.module').then(m => m.CategoriaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
