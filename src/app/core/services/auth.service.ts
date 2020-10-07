import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';

type TipoUsuario = 'CONSUMIDOR' | 'ADMIN' | 'DOMICILIARIO' | 'VENDEDOR';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(tipoUsuario: TipoUsuario) {
    try {
      const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);

      if (token) {
        const { exp } = jwt_decode(token);
        console.log(exp);

        const isTokenExpired = new Date().getTime() > exp * 1000;

        if (isTokenExpired) {
          this.removerTokens(tipoUsuario);
          return false;
        }
        return true;
      }

      return false;
    } catch (err) {
      return console.log(err);
    }
  }

  getEstadoUsuario(tipoUsuario: TipoUsuario) {
    try {
      const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);
      if (token) {
        const { estado } = jwt_decode(token);
        return estado;
      } else {
        this.removerTokens(tipoUsuario);
      }
    } catch (err) {
      console.log(err);
    }
  }

  private removerTokens(tipoUsuario: TipoUsuario) {
    localStorage.removeItem(`${tipoUsuario}_TOKEN`);
  }
}
