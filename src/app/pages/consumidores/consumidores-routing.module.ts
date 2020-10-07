import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthConsumidorGuard } from 'src/app/guards/auth-consumidor.guard';

import { ConsumidoresComponent } from './consumidores.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumidoresComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./consumidor/consumidor.module').then(m => m.ConsumidorModule),
        canActivate: [AuthConsumidorGuard],
        data: { expectedUsuario: 'CONSUMIDOR' }
      },
      {
        path: 'completar-registro',
        loadChildren: () =>
          import('./completar-registro/completar-registro.module').then(
            m => m.CompletarRegistroModule
          ),
        canActivate: [AuthConsumidorGuard],
        data: { expectedUsuario: 'CONSUMIDOR' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumidoresRoutingModule {}
