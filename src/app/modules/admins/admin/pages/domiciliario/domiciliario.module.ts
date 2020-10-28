import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomiciliarioRoutingModule } from './domiciliario-routing.module';
import { DomiciliarioComponent } from './domiciliario.component';
import { InsertarDomiciliarioComponent } from './insertar-domiciliario/insertar-domiciliario.component';
import { ListarDomiciliarioComponent } from './listar-domiciliario/listar-domiciliario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DomiciliarioComponent, InsertarDomiciliarioComponent, ListarDomiciliarioComponent],
  imports: [CommonModule, DomiciliarioRoutingModule, ReactiveFormsModule]
})
export class DomiciliarioModule {}
