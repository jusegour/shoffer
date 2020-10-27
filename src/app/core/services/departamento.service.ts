import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    return this.http.get(environment.urlBackend + `departamentos`).pipe(map(data => data));
  }

  getMunicipios(id: number): Observable<any> {
    return this.http
      .get(environment.urlBackend + `departamentos/${id}/municipios`)
      .pipe(map(data => data));
  }
}
