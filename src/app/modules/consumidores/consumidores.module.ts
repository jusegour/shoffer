import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidoresRoutingModule } from './consumidores-routing.module';
import { ConsumidoresComponent } from './consumidores.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './http-interceptors/token.interceptor';
import { ErrorInterceptor } from './http-interceptors/error.interceptor';

@NgModule({
  declarations: [ConsumidoresComponent],
  imports: [CommonModule, ConsumidoresRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class ConsumidoresModule {}
