import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomiciliarioComponent } from './domiciliario.component';
import { InsertarDomiciliarioComponent } from './insertar-domiciliario/insertar-domiciliario.component';
import { ListarDomiciliarioComponent } from './listar-domiciliario/listar-domiciliario.component';

const routes: Routes = [
  {
    path: '',
    component: DomiciliarioComponent,
    children: [
      { path: 'insertar-domiciliario', component: InsertarDomiciliarioComponent },
      { path: 'lista-domiciliarios', component: ListarDomiciliarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomiciliarioRoutingModule {}
