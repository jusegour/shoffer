import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConsumidorService } from './services/consumidor.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';

@NgModule({
  providers: [ConsumidorService, AuthService, AdminService],
  imports: [HttpClientModule]
})
export class CoreModule {}
