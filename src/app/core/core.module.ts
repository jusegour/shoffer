import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConsumidorService } from './services/consumidor.service';
import { AuthService } from './services/auth.service';

@NgModule({
  providers: [ConsumidorService, AuthService],
  imports: [HttpClientModule]
})
export class CoreModule {}
