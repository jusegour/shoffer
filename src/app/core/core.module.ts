import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConsumidorService } from './services/consumidor.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { VendedorService } from './services/vendedor.service';
import { PersonaNaturalService } from './services/persona-natural.service';
import { DepartamentoService } from './services/departamento.service';

@NgModule({
  providers: [
    ConsumidorService,
    AuthService,
    AdminService,
    VendedorService,
    PersonaNaturalService,
    DepartamentoService
  ],
  imports: [HttpClientModule]
})
export class CoreModule {}
