import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  searchCategorias(q?: string, page?: number, limit?: number): Observable<any> {
    const url = new URLSearchParams({
      q: q || '',
      page: page || 1,
      limit: limit || 10
    } as any);
    return this.http
      .get(environment.urlBackend + `categorias/search?${url}`)
      .pipe(map(data => data));
  }

  getCategorias(): Observable<any> {
    return this.http
      .get(environment.urlBackend + `categorias`, { withCredentials: true })
      .pipe(map(data => data));
  }

  storeCategoria(data: any): Observable<any> {
    return this.http.post(environment.urlBackend + `categorias`, data).pipe(map(data => data));
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(environment.urlBackend + `categorias/${id}`).pipe(map(data => data));
  }
}
