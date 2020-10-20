import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  constructor(private http: HttpClient) {}

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
      .post(environment.urlBackend + `auth/login-consumidor`, data)
      .pipe(map(data => data));
  }
}
