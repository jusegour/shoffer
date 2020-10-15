import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {
  nombre: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nombre = this.authService.getNombreUsuario('CONSUMIDOR');
  }

  logout() {
    localStorage.removeItem('CONSUMIDOR_TOKEN');
    location.reload();
  }
}
