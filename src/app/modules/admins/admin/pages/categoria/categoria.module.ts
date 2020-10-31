import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { InsertarCategoriaComponent } from './insertar-categoria/insertar-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CategoriaComponent, InsertarCategoriaComponent, ListarCategoriasComponent],
  imports: [CommonModule, CategoriaRoutingModule, ReactiveFormsModule, MatPaginatorModule]
})
export class CategoriaModule {}
