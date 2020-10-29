import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidorRoutingModule } from './consumidor-routing.module';
import { ConsumidorComponent } from './consumidor.component';

@NgModule({
  declarations: [ConsumidorComponent],
  imports: [CommonModule, ConsumidorRoutingModule]
})
export class ConsumidorModule {}
