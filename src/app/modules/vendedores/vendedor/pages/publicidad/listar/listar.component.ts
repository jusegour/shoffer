import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '@app/core/services/auth.service';
import { VendedorService } from '@app/core/services/vendedor.service';
import { Pagination } from '@app/interfaces/pagination';
import { fromEvent, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, exhaustMap, catchError } from 'rxjs/operators';

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  publicidades: Array<any>;
  pagination: Pagination;
  keyword: string;
  lowValue: number = 0;
  highValue: number = 20;

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
            .searchPublicidades(this.authService.getIdUsuario('VENDEDOR'), keyword)
            .pipe(catchError(_ => of('keep on searching!!!')));
        })
      )
      .subscribe(
        ({ results, info }) => {
          this.publicidades = results;
          this.pagination = info;
        },
        err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.getPublicidades();
  }

  setPageSizeOptions(pageEvent: PageEvent) {
    this.lowValue = pageEvent.pageIndex * pageEvent.pageSize;
    this.highValue = this.lowValue + pageEvent.pageSize;
  }

  getPublicidades(page?: number, limit?: number) {
    this.vendedorService
      .searchPublicidades(this.authService.getIdUsuario('VENDEDOR'), this.keyword, page, limit)
      .subscribe(
        ({ results, info }) => {
          this.publicidades = results;
          this.pagination = info;
        },
        err => console.log(err)
      );
  }

  onDelete(id: number) {
    if (!confirm('Seguro que quieres eliminarlo?')) {
      return null;
    }

    this.vendedorService.deletePublicidad(this.authService.getIdUsuario('VENDEDOR'), id).subscribe(
      ({ message }) => {
        console.log(message);
        this.getPublicidades();
      },
      err => console.log(err)
    );
  }
}
