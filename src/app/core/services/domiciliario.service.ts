import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomiciliarioService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `auth/login-domiciliario`, data)
      .pipe(map(data => data));
  }

  getDomiciliario(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + `domiciliarios/${id}`).pipe(map(data => data));
  }

  updateDomiciliario(id: number, data: any): Observable<any> {
    return this.http
      .put(environment.urlBackend + `domiciliarios/${id}`, data)
      .pipe(map(data => data));
  }

  storeDomiciliario(data: any): Observable<any> {
    return this.http.post(environment.urlBackend + `domiciliarios`, data).pipe(map(data => data));
  }
}
