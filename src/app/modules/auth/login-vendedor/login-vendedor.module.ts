import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginVendedorRoutingModule } from './login-vendedor-routing.module';
import { LoginVendedorComponent } from './login-vendedor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginVendedorComponent],
  imports: [CommonModule, LoginVendedorRoutingModule, ReactiveFormsModule]
})
export class LoginVendedorModule {}
