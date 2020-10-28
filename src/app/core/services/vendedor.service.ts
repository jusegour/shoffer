import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  constructor(private http: HttpClient) {}

  getVendedores(): Observable<any> {
    return this.http.get(environment.urlBackend + `vendedores`).pipe(map(data => data));
  }

  getVendedor(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + `vendedores/${id}`).pipe(map(data => data));
  }

  storeVendedor(data: any): Observable<any> {
    return this.http.post(environment.urlBackend + `vendedores`, data).pipe(map(data => data));
  }

  updateVendedor(id: number, data: any): Observable<any> {
    return this.http.put(environment.urlBackend + `vendedores/${id}`, data).pipe(map(data => data));
  }

  deleteVendedor(id: number): Observable<any> {
    return this.http.delete(environment.urlBackend + `vendedores/${id}`).pipe(map(data => data));
  }

  login(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `auth/login-vendedor`, data)
      .pipe(map(data => data));
  }
}
