import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioConsumidorService } from './services/usuario-consumidor.service';
import { AuthService } from './services/auth.service';

@NgModule({
  providers: [UsuarioConsumidorService, AuthService],
  imports: [HttpClientModule]
})
export class CoreModule {}
