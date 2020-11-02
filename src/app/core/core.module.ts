import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConsumidorService } from './services/consumidor.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { VendedorService } from './services/vendedor.service';
import { PersonaNaturalService } from './services/persona-natural.service';
import { DepartamentoService } from './services/departamento.service';
import { DomiciliarioService } from './services/domiciliario.service';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';

import { LogUpdateService } from './services/sw/log-update.service';
import { CheckForUpdateService } from './services/sw/check-for-update.service';
import { PromptUpdateService } from './services/sw/prompt-update.service';

@NgModule({
  providers: [
    ConsumidorService,
    AuthService,
    AdminService,
    VendedorService,
    PersonaNaturalService,
    DepartamentoService,
    DomiciliarioService,
    CategoriaService,
    ProductoService,
    LogUpdateService,
    CheckForUpdateService,
    PromptUpdateService
  ],
  imports: [HttpClientModule]
})
export class CoreModule {}
