import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { fromEvent, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, exhaustMap, catchError } from 'rxjs/operators';
import { Pagination } from '@app/interfaces/pagination';
import { CategoriaService } from '@app/core/services/categoria.service';

@Component({
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {
  categorias: Array<any>;
  pagination: Pagination;
  keyword: string;

  constructor(private categoriaService: CategoriaService) {}

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('inputSearch'), 'input')
      .pipe(
        map(event => (event.target as HTMLInputElement).value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
        exhaustMap(keyword => {
          this.keyword = keyword;
          return this.categoriaService
            .searchCategorias(keyword)
            .pipe(catchError(_ => of('keep on searching!!!')));
        })
      )
      .subscribe(
        ({ results, info }) => {
          this.categorias = results;
          this.pagination = info;
        },
        err => console.log(err)
      );
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  lowValue: number = 0;
  highValue: number = 20;

  setPageSizeOptions(pageEvent: PageEvent) {
    this.lowValue = pageEvent.pageIndex * pageEvent.pageSize;
    this.highValue = this.lowValue + pageEvent.pageSize;
  }

  getCategorias(page?: number, limit?: number) {
    this.categoriaService.searchCategorias(this.keyword, page, limit).subscribe(
      ({ results, info }) => {
        this.categorias = results;
        this.pagination = info;
      },
      err => console.log(err)
    );
  }

  onDelete(id: number) {
    if (!confirm('Seguro que quieres eliminarlo?')) {
      return null;
    }

    this.categoriaService.deleteCategoria(id).subscribe(
      () => {
        alert('borrado con exito');
        this.getCategorias();
      },
      err => console.log(err)
    );
  }
}
