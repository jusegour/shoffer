import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '@app/core/services/categoria.service';
import { ConsumidorService } from '@app/core/services/consumidor.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {
  nombre: string;
  constructor(
    private authService: AuthService,
    private consumidorService: ConsumidorService,
    private ca: CategoriaService
  ) {}

  ngOnInit(): void {
    this.nombre = this.authService.getNombreUsuario('CONSUMIDOR');
  }

  logout() {
    this.consumidorService.logout();
  }

  f() {
    this.ca.getCategorias().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
