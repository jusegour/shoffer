import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminGuard } from 'src/app/guards/admin.guard';

import { AdminsComponent } from './admins.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, AdminGuard],
        data: { expectedUsuario: 'ADMIN', expectedEstado: 'ACTIVO' }
      },
      {
        path: 'completar-registro',
        loadChildren: () =>
          import('./completar-registro/completar-registro.module').then(
            m => m.CompletarRegistroModule
          ),
        canActivate: [AuthGuard, AdminGuard],
        data: { expectedUsuario: 'ADMIN', expectedEstado: 'ESPERA' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule {}
