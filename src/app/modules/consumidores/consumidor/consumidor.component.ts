import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setAccessToken } from '@app/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {
  nombre: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.nombre = this.authService.getNombreUsuario('CONSUMIDOR');
  }

  logout() {
    setAccessToken(null);
    this.router.navigate(['']);
    // localStorage.removeItem('CONSUMIDOR_TOKEN');
    // location.reload();
  }
}
