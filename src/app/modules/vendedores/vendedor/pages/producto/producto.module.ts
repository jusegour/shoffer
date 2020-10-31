import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { InsertarProductoComponent } from './insertar-producto/insertar-producto.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ProductoComponent, InsertarProductoComponent, ListarProductosComponent],
  imports: [CommonModule, ProductoRoutingModule, ReactiveFormsModule, MatPaginatorModule]
})
export class ProductoModule {}
