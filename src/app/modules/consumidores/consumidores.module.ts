import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidoresRoutingModule } from './consumidores-routing.module';
import { ConsumidoresComponent } from './consumidores.component';

@NgModule({
  declarations: [ConsumidoresComponent],
  imports: [CommonModule, ConsumidoresRoutingModule]
})
export class ConsumidoresModule {}
