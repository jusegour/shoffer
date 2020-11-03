import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresComponent } from './vendedores.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './http-interceptors/error.interceptor';
import { TokenInterceptor } from './http-interceptors/token.interceptor';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [VendedoresComponent],
  imports: [CommonModule, VendedoresRoutingModule, CoreModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class VendedoresModule {}
