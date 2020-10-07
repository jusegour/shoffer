import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioConsumidorService {
  constructor(private http: HttpClient) {}

  storeUsuario(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `usuario-consumidor`, data)
      .pipe(map(data => data));
  }

  login(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `usuario-consumidor/login`, data)
      .pipe(map(data => data));
  }
}
