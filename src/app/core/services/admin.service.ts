import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http
      .post(environment.urlBackend + `auth/login-admin`, data)
      .pipe(map(data => data));
  }

  getAdmin(id: number): Observable<any> {
    return this.http.get(environment.urlBackend + `admins/${id}`).pipe(map(data => data));
  }

  updateAdmin(id: number, data: any): Observable<any> {
    return this.http.put(environment.urlBackend + `admins/${id}`, data).pipe(map(data => data));
  }
}
