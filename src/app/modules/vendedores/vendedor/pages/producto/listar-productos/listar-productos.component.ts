import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '@app/core/services/auth.service';
import { VendedorService } from '@app/core/services/vendedor.service';
import { Pagination } from '@app/interfaces/pagination';
import { fromEvent, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, exhaustMap, catchError } from 'rxjs/operators';

@Component({
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: Array<any>;
  pagination: Pagination;
  keyword: string;

  constructor(private vendedorService: VendedorService, private authService: AuthService) {}

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('inputSearch'), 'input')
      .pipe(
        map(event => (event.target as HTMLInputElement).value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
        exhaustMap(keyword => {
          this.keyword = keyword;
          return this.vendedorService
            .searchProductos(this.authService.getIdUsuario('VENDEDOR'), keyword)
            .pipe(catchError(_ => of('keep on searching!!!')));
        })
      )
      .subscribe(
        ({ results, info }) => {
          this.productos = results;
          this.pagination = info;
        },
        err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.getVendedores();
  }

  lowValue: number = 0;
  highValue: number = 20;

  setPageSizeOptions(pageEvent: PageEvent) {
    this.lowValue = pageEvent.pageIndex * pageEvent.pageSize;
    this.highValue = this.lowValue + pageEvent.pageSize;
  }

  getVendedores(page?: number, limit?: number) {
    this.vendedorService
      .searchProductos(this.authService.getIdUsuario('VENDEDOR'), this.keyword, page, limit)
      .subscribe(
        ({ results, info }) => {
          this.productos = results;
          this.pagination = info;
        },
        err => console.log(err)
      );
  }

  onDelete(id: number) {
    if (!confirm('Seguro que quieres eliminarlo?')) {
      return null;
    }

    this.vendedorService.deleteProducto(this.authService.getIdUsuario('VENDEDOR'), id).subscribe(
      ({ message }) => {
        console.log(message);
        this.getVendedores();
      },
      err => console.log(err)
    );
  }
}
