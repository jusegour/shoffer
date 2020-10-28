import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DomiciliarioGuard } from 'src/app/guards/domiciliario.guard';

import { DomiciliariosComponent } from './domiciliarios.component';

const routes: Routes = [
  {
    path: '',
    component: DomiciliariosComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./domiciliario/domiciliario.module').then(m => m.DomiciliarioModule),
        canActivate: [AuthGuard, DomiciliarioGuard],
        data: { expectedUsuario: 'DOMICILIARIO', expectedEstado: 'ACTIVO' }
      },
      {
        path: 'completar-registro',
        loadChildren: () =>
          import('./completar-registro/completar-registro.module').then(
            m => m.CompletarRegistroModule
          ),
        canActivate: [AuthGuard, DomiciliarioGuard],
        data: { expectedUsuario: 'DOMICILIARIO', expectedEstado: 'ESPERA' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomiciliariosRoutingModule {}
