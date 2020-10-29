import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomiciliariosRoutingModule } from './domiciliarios-routing.module';
import { DomiciliariosComponent } from './domiciliarios.component';

@NgModule({
  declarations: [DomiciliariosComponent],
  imports: [CommonModule, DomiciliariosRoutingModule]
})
export class DomiciliariosModule {}
