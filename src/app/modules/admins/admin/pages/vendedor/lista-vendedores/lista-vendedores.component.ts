import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/core/services/vendedor.service';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, exhaustMap, catchError } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from '@app/interfaces/pagination';

@Component({
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.css']
})
export class ListaVendedoresComponent implements OnInit, AfterViewInit {
  vendedores: Array<any>;
  pagination: Pagination;
  keyword: string;

  constructor(private vendedorService: VendedorService) {}

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('inputSearch'), 'input')
      .pipe(
        map(event => (event.target as HTMLInputElement).value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
        exhaustMap(keyword => {
          this.keyword = keyword;
          return this.vendedorService
            .searchVendedores(keyword)
            .pipe(catchError(_ => of('keep on searching!!!')));
        })
      )
      .subscribe(
        ({ results, info }) => {
          this.vendedores = results;
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
    this.vendedorService.searchVendedores(this.keyword, page, limit).subscribe(
      ({ results, info }) => {
        this.vendedores = results;
        this.pagination = info;
      },
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
