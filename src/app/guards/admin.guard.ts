import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedEstado = route.data.expectedEstado;
    const currentEstado = this.authService.getEstadoUsuario('ADMIN');

    if (currentEstado && expectedEstado != currentEstado) {
      switch (currentEstado) {
        case 'ESPERA':
          this.router.navigate(['/admins/completar-registro']);
          break;
        case 'ACTIVO':
          this.router.navigate(['/admins']);
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
