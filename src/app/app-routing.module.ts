import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { NoFoundComponent } from './componets/no-found/no-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'consumidores',
    loadChildren: () =>
      import('./modules/consumidores/consumidores.module').then(m => m.ConsumidoresModule)
  },
  {
    path: 'admins',
    loadChildren: () => import('./modules/admins/admins.module').then(m => m.AdminsModule)
  },
  {
    path: 'vendedores',
    loadChildren: () =>
      import('./modules/vendedores/vendedores.module').then(m => m.VendedoresModule)
  },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
