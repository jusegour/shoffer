import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginAdminComponent } from './login-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginAdminComponent],
  imports: [CommonModule, LoginAdminRoutingModule, ReactiveFormsModule]
})
export class LoginAdminModule {}
