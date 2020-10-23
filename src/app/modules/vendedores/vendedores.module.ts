import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresComponent } from './vendedores.component';


@NgModule({
  declarations: [VendedoresComponent],
  imports: [
    CommonModule,
    VendedoresRoutingModule
  ]
})
export class VendedoresModule { }
