import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  searchProductos(q?: string, page?: number, limit?: number): Observable<any> {
    const url = new URLSearchParams({
      q: q || '',
      page: page || 1,
      limit: limit || 10
    } as any);
    return this.http
      .get(environment.urlBackend + `productos/search?${url}`)
      .pipe(map(data => data));
  }

  getProductos(): Observable<any> {
    return this.http.get(environment.urlBackend + `productos`).pipe(map(data => data));
  }

  storeProducto(formData: FormData): Observable<any> {
    return this.http
      .post(environment.urlBackend + `productos`, formData, {
        observe: 'events',
        reportProgress: true
      })
      .pipe(map(data => data));
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(environment.urlBackend + `productos/${id}`).pipe(map(data => data));
  }
}
