import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  templateUrl: './insertar-categoria.component.html',
  styleUrls: ['./insertar-categoria.component.css']
})
export class InsertarCategoriaComponent implements OnInit {
  formCategoria: FormGroup;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.formCategoria = this.fb.group({
      nombre: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.categoriaService.storeCategoria(this.formCategoria.value).subscribe(
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
