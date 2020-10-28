import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/core/services/vendedor.service';

@Component({
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.css']
})
export class ListaVendedoresComponent implements OnInit {
  vendedores: Array<any>;

  constructor(private vendedorService: VendedorService) {}

  ngOnInit(): void {
    this.getVendedores();
  }

  getVendedores() {
    this.vendedorService.getVendedores().subscribe(
      data => (this.vendedores = data),
      err => console.log(err)
    );
  }

  onDelete(id: number) {
    if (!confirm('Seguro que quieres eliminarlo?')) {
      return null;
    }

    this.vendedorService.deleteVendedor(id).subscribe(
      () => {
        alert('borrado con exito');
        this.getVendedores();
      },
      err => console.log(err)
    );
  }
}
