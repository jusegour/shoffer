import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { setAccessToken } from '@app/auth';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  constructor(private http: HttpClient, private router: Router) {}

  getConsumidor(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + `consumidores/${id}`).pipe(map(data => data));
  }

  storeConsumidor(data: any): Observable<any> {
    return this.http.post(environment.urlBackend + `consumidores`, data).pipe(map(data => data));
  }

  updateConsumidor(id: number, data: any): Observable<any> {
    return this.http
      .put(environment.urlBackend + `consumidores/${id}`, data)
      .pipe(map(data => data));
  }

  login(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `auth/login-consumidor`, data, {
        withCredentials: true
      })
      .pipe(map(data => data));
  }

  logout() {
    this.http
      .post(environment.urlBackend + `auth/logout`, null, {
        withCredentials: true
      })
      .subscribe();
    setAccessToken(null);
    this.router.navigate(['/']);
  }

  refreshToken(): Observable<any> {
    return this.http
      .post(environment.urlBackend + `auth/refresh_token`, null, { withCredentials: true })
      .pipe(map(data => data));
  }
}
