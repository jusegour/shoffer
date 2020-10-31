import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '@app/core/services/categoria.service';
import { ProductoService } from '@app/core/services/producto.service';

@Component({
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {
  formProducto: FormGroup;
  isLoading: boolean;

  categorias: Array<any>;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.formProducto = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      valorUnitario: [null, [Validators.required]],
      detallePromocion: [null, [Validators.required]],
      cantDisponible: [null, [Validators.required]],
      VendedorId: [null, [Validators.required]],
      CategoriaId: [null, [Validators.required]]
    });

    this.categoriaService.getCategorias().subscribe(
      data => (this.categorias = data),
      err => console.log(err)
    );
  }

  onSubmit() {
    this.isLoading = true;
    this.productoService.storeProducto(this.formProducto.value).subscribe(
      data => {
        this.isLoading = false;
        console.log(data);
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
