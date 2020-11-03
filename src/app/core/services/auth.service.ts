import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

import { getAccesToken, setAccessToken } from '@app/auth';

type TipoUsuario = 'CONSUMIDOR' | 'ADMIN' | 'DOMICILIARIO' | 'VENDEDOR';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(tipoUsuario: TipoUsuario) {
    try {
      const token = getAccesToken();
      if (token) {
        const { exp } = jwt_decode(token);
        const isTokenExpired = new Date().getTime() > exp * 1000;
        if (isTokenExpired) {
          setAccessToken(null);
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
      const token = getAccesToken();
      // const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);
      if (token) {
        const { estado } = jwt_decode(token);
        return estado;
      } else {
        setAccessToken(null);
      }
    } catch (err) {
      return null;
    }
  }

  getNombreUsuario(tipoUsuario: TipoUsuario): string {
    try {
      const token = getAccesToken();
      if (token) {
        const { nombre } = jwt_decode(token);
        return nombre;
      } else {
        setAccessToken(null);
      }
    } catch (err) {
      return null;
    }
  }

  getIdUsuario(tipoUsuario: TipoUsuario): number {
    try {
      const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);
      if (token) {
        const { id } = jwt_decode(token);
        return id;
      } else {
        this.removerTokens(tipoUsuario);
      }
    } catch (err) {
      return null;
    }
  }

  private removerTokens(tipoUsuario: TipoUsuario) {
    localStorage.removeItem(`${tipoUsuario}_TOKEN`);
  }
}
