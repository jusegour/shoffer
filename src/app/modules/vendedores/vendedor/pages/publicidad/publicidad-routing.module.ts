import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';

import { PublicidadComponent } from './publicidad.component';

const routes: Routes = [
  {
    path: '',
    component: PublicidadComponent,
    children: [
      { path: 'insertar', component: InsertarComponent },
      { path: 'listar', component: ListarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicidadRoutingModule {}
