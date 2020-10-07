import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedUsuario = route.data.expectedUsuario;

    if (this.authService.isAuthenticated(expectedUsuario)) {
      switch (this.authService.getEstadoUsuario('CONSUMIDOR')) {
        case 'ESPERA':
          this.router.navigate(['/consumidores/completar-registro']);
          break;
        case 'ACTIVO':
          this.router.navigate(['/consumidores']);
          break;
        case 'INACTIVO':
          this.router.navigate(['/consumidores/inactivo']);
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
