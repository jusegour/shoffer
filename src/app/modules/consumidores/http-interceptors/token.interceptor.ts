import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/services/auth.service';
import { environment } from '@env/environment';
import { getAccesToken } from '@app/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url.startsWith(environment.urlBackend);

    if (url && this.authService.isAuthenticated('CONSUMIDOR')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${getAccesToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
