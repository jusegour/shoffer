import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { VendedorComponent } from './vendedor.component';
import { InsertarVendedorComponent } from './insertar-vendedor/insertar-vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VendedorComponent, InsertarVendedorComponent, ListaVendedoresComponent],
  imports: [CommonModule, VendedorRoutingModule, ReactiveFormsModule]
})
export class VendedorModule {}
