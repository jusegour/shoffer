import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  constructor(private http: HttpClient) {}

  storeProducto(formData: FormData): Observable<any> {
    return this.http
      .post(environment.urlBackend + `publicidades`, formData, {
        observe: 'events',
        reportProgress: true
      })
      .pipe(map(data => data));
  }
}
