import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletarRegistroRoutingModule } from './completar-registro-routing.module';
import { CompletarRegistroComponent } from './completar-registro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompletarRegistroComponent],
  imports: [CommonModule, CompletarRegistroRoutingModule, ReactiveFormsModule]
})
export class CompletarRegistroModule {}
