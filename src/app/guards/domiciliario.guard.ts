import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DomiciliarioGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedEstado = route.data.expectedEstado;
    const currentEstado = this.authService.getEstadoUsuario('DOMICILIARIO');

    if (expectedEstado != currentEstado) {
      switch (currentEstado) {
        case 'ESPERA':
          this.router.navigate(['/domiciliarios/completar-registro']);
          break;
        case 'ACTIVO':
          this.router.navigate(['/domiciliarios']);
          break;
        default:
          console.log('caso erroneo.');
          break;
      }
      return false;
    }

    return true;
  }
}
