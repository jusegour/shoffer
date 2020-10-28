import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomiciliarioRoutingModule } from './domiciliario-routing.module';
import { DomiciliarioComponent } from './domiciliario.component';


@NgModule({
  declarations: [DomiciliarioComponent],
  imports: [
    CommonModule,
    DomiciliarioRoutingModule
  ]
})
export class DomiciliarioModule { }
