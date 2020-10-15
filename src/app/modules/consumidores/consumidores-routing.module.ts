import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ConsumidorGuard } from 'src/app/guards/consumidor.guard';

import { ConsumidoresComponent } from './consumidores.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumidoresComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./consumidor/consumidor.module').then(m => m.ConsumidorModule),
        canActivate: [AuthGuard, ConsumidorGuard],
        data: { expectedUsuario: 'CONSUMIDOR', expectedEstado: 'ACTIVO' }
      },
      {
        path: 'completar-registro',
        loadChildren: () =>
          import('./completar-registro/completar-registro.module').then(
            m => m.CompletarRegistroModule
          ),
        canActivate: [AuthGuard, ConsumidorGuard],
        data: { expectedUsuario: 'CONSUMIDOR', expectedEstado: 'ESPERA' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumidoresRoutingModule {}
