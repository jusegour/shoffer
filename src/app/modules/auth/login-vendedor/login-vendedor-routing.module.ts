import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVendedorComponent } from './login-vendedor.component';

const routes: Routes = [{ path: '', component: LoginVendedorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginVendedorRoutingModule { }
