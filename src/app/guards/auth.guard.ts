import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedUsuario = route.data.expectedUsuario;

    if (this.authService.isAuthenticated(expectedUsuario)) {
      return true;
    }

    switch (expectedUsuario) {
      case 'CONSUMIDOR':
        this.router.navigate(['/auth/login'], { queryParams: { next: state.url } });
        break;
      default:
        console.log('caso erroneo.');
        break;
    }
    return false;
  }
}
