import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarProductoComponent } from './insertar-producto/insertar-producto.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';

import { ProductoComponent } from './producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [
      { path: 'insertar', component: InsertarProductoComponent },
      { path: 'listar', component: ListarProductosComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule {}
