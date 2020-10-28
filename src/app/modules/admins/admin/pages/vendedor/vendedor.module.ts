import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { VendedorComponent } from './vendedor.component';
import { InsertarVendedorComponent } from './insertar-vendedor/insertar-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './lista-vendedores/filtro.pipe';

@NgModule({
  declarations: [VendedorComponent, InsertarVendedorComponent, ListaVendedoresComponent, FiltroPipe],
  imports: [CommonModule, VendedorRoutingModule, ReactiveFormsModule]
})
export class VendedorModule {}
