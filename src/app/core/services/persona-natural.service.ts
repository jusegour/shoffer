import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {
  constructor(private http: HttpClient) {}

  getPersonaN(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + `personas-natural/${id}`).pipe(map(data => data));
  }

  storePersonaN(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `personas-natural`, data)
      .pipe(map(data => data));
  }

  updatePersonaN(id: number, data: any): Observable<any> {
    return this.http
      .put(environment.urlBackend + `personas-natural/${id}`, data)
      .pipe(map(data => data));
  }
}
