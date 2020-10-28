import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDomiciliarioRoutingModule } from './login-domiciliario-routing.module';
import { LoginDomiciliarioComponent } from './login-domiciliario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginDomiciliarioComponent],
  imports: [CommonModule, LoginDomiciliarioRoutingModule, ReactiveFormsModule]
})
export class LoginDomiciliarioModule {}
