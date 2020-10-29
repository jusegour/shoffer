import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarRegistroComponent } from './completar-registro.component';

const routes: Routes = [{ path: '', component: CompletarRegistroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletarRegistroRoutingModule {}
