import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicidadRoutingModule } from './publicidad-routing.module';
import { PublicidadComponent } from './publicidad.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PublicidadComponent, InsertarComponent, ListarComponent],
  imports: [CommonModule, PublicidadRoutingModule, ReactiveFormsModule, MatPaginatorModule]
})
export class PublicidadModule {}
