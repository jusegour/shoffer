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
import { PublicidadService } from './services/publicidad.service';

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
    PublicidadService
  ],
  imports: [HttpClientModule]
})
export class CoreModule {}
