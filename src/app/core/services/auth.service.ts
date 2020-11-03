import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

type TipoUsuario = 'CONSUMIDOR' | 'ADMIN' | 'DOMICILIARIO' | 'VENDEDOR';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(tipoUsuario: TipoUsuario) {
    try {
      const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);
      if (token) {
        const { exp } = jwt_decode(token);
        const isTokenExpired = new Date().getTime() > exp * 1000;
        if (isTokenExpired) {
          this.removerTokens(tipoUsuario);
          return false;
        }
        return true;
      }

      return false;
    } catch (err) {
      this.removerTokens(tipoUsuario);
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
      return null;
    }
  }

  getNombreUsuario(tipoUsuario: TipoUsuario): string {
    try {
      const token = localStorage.getItem(`${tipoUsuario}_TOKEN`);
      if (token) {
        const { nombre } = jwt_decode(token);
        return nombre;
      } else {
        this.removerTokens(tipoUsuario);
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

  logout(tipoUsuario: TipoUsuario) {
    this.removerTokens(tipoUsuario);
  }

  private removerTokens(tipoUsuario: TipoUsuario) {
    localStorage.removeItem(`${tipoUsuario}_TOKEN`);
  }
}
