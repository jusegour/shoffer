import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarVendedorComponent } from './insertar-vendedor/insertar-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';

import { VendedorComponent } from './vendedor.component';

const routes: Routes = [
  {
    path: '',
    component: VendedorComponent,
    children: [
      { path: 'insertar-vendedor', component: InsertarVendedorComponent },
      { path: 'lista-vendedores', component: ListaVendedoresComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule {}
