import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent } from './categoria.component';
import { InsertarCategoriaComponent } from './insertar-categoria/insertar-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
    children: [
      { path: 'insertar', component: InsertarCategoriaComponent },
      { path: 'listar', component: ListarCategoriasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule {}
