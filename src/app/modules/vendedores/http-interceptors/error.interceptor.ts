import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          if (this.authService.isAuthenticated('VENDEDOR')) {
            this.authService.logout('VENDEDOR');
          } else {
            // this.authService.logout('AD');
          }

          location.reload(true);
        }

        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        }
        if (err.error instanceof ProgressEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error);
        }

        const error = {
          status: err.status,
          message: err?.error?.message || err.statusText
        };

        return throwError(error);
      })
    );
  }
}
