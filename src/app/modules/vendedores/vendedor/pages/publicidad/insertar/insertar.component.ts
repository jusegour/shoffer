import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';
import { CategoriaService } from '@app/core/services/categoria.service';
import { PublicidadService } from '@app/core/services/publicidad.service';

@Component({
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  formCategoria: FormGroup;
  isLoading: boolean;
  categorias: Array<any>;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private publicidadService: PublicidadService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formCategoria = this.fb.group({
      descripcion: [null, [Validators.required]],
      imagen: [null, [Validators.required]],
      url: [null, [Validators.required]],
      VendedorId: [null, [Validators.required]],
      CategoriaId: [null, [Validators.required]]
    });

    this.categoriaService.getCategorias().subscribe(
      data => (this.categorias = data),
      err => console.log(err)
    );
  }

  get f() {
    return this.formCategoria.controls;
  }

  onSelectFile({ target }: { target: HTMLInputElement }) {
    if (target.files[0]) {
      this.f.imagen.setValue(target.files[0]);
    } else {
      this.f.imagen.setValue(null);
    }

    this.f.imagen.markAllAsTouched();
    this.f.imagen.updateValueAndValidity();
  }

  onSubmit() {
    this.isLoading = true;

    this.f.VendedorId.setValue(this.authService.getIdUsuario('VENDEDOR'));

    const formData = new FormData();

    for (const key in this.formCategoria.value) {
      formData.append(key, this.formCategoria.value[key]);
    }

    this.publicidadService.storeProducto(formData).subscribe(
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
