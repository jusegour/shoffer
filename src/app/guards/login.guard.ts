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
      switch (expectedUsuario) {
        case 'VENDEDOR':
          this.router.navigate(['/vendedores']);
          break;
        case 'CONSUMIDOR':
          this.router.navigate(['/consumidores']);
          break;
        case 'ADMIN':
          this.router.navigate(['/admins']);
          break;
        case 'DOMICILIARIO':
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
