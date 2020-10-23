import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { VendedorGuard } from 'src/app/guards/vendedor.guard';

import { VendedoresComponent } from './vendedores.component';

const routes: Routes = [
  {
    path: '',
    component: VendedoresComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule),
        canActivate: [AuthGuard, VendedorGuard],
        data: { expectedUsuario: 'VENDEDOR', expectedEstado: 'ACTIVO' }
      },
      {
        path: 'completar-registro',
        loadChildren: () =>
          import('./completar-registro/completar-registro.module').then(
            m => m.CompletarRegistroModule
          ),
        canActivate: [AuthGuard, VendedorGuard],
        data: { expectedUsuario: 'VENDEDOR', expectedEstado: 'ESPERA' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule {}
