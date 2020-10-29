import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDomiciliarioComponent } from './login-domiciliario.component';

const routes: Routes = [{ path: '', component: LoginDomiciliarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDomiciliarioRoutingModule {}
