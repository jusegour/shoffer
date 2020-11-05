import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '@app/core/services/auth.service';
import { CategoriaService } from '@app/core/services/categoria.service';
import { ProductoService } from '@app/core/services/producto.service';

@Component({
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {
  formProducto: FormGroup;
  isLoading: boolean;
  progressInfos = [];

  categorias: Array<any>;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formProducto = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      valorUnitario: [null, [Validators.required]],
      detallePromocion: [null, [Validators.required]],
      cantDisponible: [null, [Validators.required]],
      VendedorId: [this.authService.getIdUsuario('VENDEDOR'), [Validators.required]],
      CategoriaId: [null, [Validators.required]],
      fotos: this.fb.array([this.fb.control(null, Validators.required)])
    });

    this.categoriaService.getCategorias().subscribe(
      data => (this.categorias = data),
      err => console.log(err)
    );
  }

  get fotosArray() {
    return this.formProducto.get('fotos') as FormArray;
  }

  addInput() {
    if (this.fotosArray.length > 6) {
      return;
    }
    this.fotosArray.push(this.fb.control(null, Validators.required));
  }

  deleteInput(i: number) {
    this.fotosArray.removeAt(i);
  }

  get f() {
    return this.formProducto.controls;
  }

  handlerFile({ target }: { target: HTMLInputElement }) {
    this.f.VendedorId.setValue(this.authService.getIdUsuario('VENDEDOR'));
    const formData = new FormData();

    for (let i = 0; i < target.files.length; i++) {
      formData.append('fotos', target.files[i]);
    }
    for (const key in this.formProducto.value) {
      formData.append(key, this.formProducto.value[key]);
    }

    this.productoService.storeProducto(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(Math.round((100 * event.loaded) / event.total));
        } else if (event instanceof HttpResponse) {
          // this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        console.log(err);

        // this.progressInfos[index].value = 0;
        // this.message = 'Could not upload the file:' + file.name;
      }
    );
  }

  upload(index: number, file: File) {
    this.progressInfos[index] = { value: 0, fileName: file.name };

    // this.categoriaService.storeCategoria(file).subscribe(
    //   event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progressInfos[index].value = Math.round((100 * event.loaded) / event.total);
    //     } else if (event instanceof HttpResponse) {
    //       // this.fileInfos = this.uploadService.getFiles();
    //     }
    //   },
    //   err => {
    //     this.progressInfos[index].value = 0;
    //     // this.message = 'Could not upload the file:' + file.name;
    //   }
    // );
  }

  onSubmit() {
    this.f.VendedorId.setValue(this.authService.getIdUsuario('VENDEDOR'));
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
