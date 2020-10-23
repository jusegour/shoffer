import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from '../../guards/login.guard';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        canActivate: [LoginGuard],
        data: { expectedUsuario: 'CONSUMIDOR' }
      },
      {
        path: 'login-admin',
        loadChildren: () =>
          import('./login-admin/login-admin.module').then(m => m.LoginAdminModule),
        canActivate: [LoginGuard],
        data: { expectedUsuario: 'ADMIN' }
      },
      {
        path: 'login-vendedor',
        loadChildren: () =>
          import('./login-vendedor/login-vendedor.module').then(m => m.LoginVendedorModule),
        canActivate: [LoginGuard],
        data: { expectedUsuario: 'VENDEDOR' }
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
        canActivate: [LoginGuard],
        data: { expectedUsuario: 'CONSUMIDOR' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
