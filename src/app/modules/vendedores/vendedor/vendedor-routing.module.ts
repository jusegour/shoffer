import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorComponent } from './vendedor.component';

const routes: Routes = [
  {
    path: '',
    component: VendedorComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoModule)
      },
      {
        path: 'publicidad',
        loadChildren: () =>
          import('./pages/publicidad/publicidad.module').then(m => m.PublicidadModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule {}
