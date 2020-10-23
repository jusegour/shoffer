import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaNaturalService } from 'src/app/core/services/persona-natural.service';
import { VendedorService } from 'src/app/core/services/vendedor.service';

@Component({
  templateUrl: './insertar-vendedor.component.html',
  styleUrls: ['./insertar-vendedor.component.css']
})
export class InsertarVendedorComponent implements OnInit {
  formVendedor: FormGroup;
  formPersonaNatural: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private vendedorService: VendedorService,
    private personaNaturalService: PersonaNaturalService
  ) {}

  ngOnInit(): void {
    this.formVendedor = this.fb.group({
      nit: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      numDocumentoPN: [null, [Validators.required]]
    });

    this.formPersonaNatural = this.fb.group({
      tipoDocumento: [null, [Validators.required]],
      numDocumento: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.vendedorService.storeVendedor(this.formVendedor.value).subscribe(
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

  onSubmitPN() {
    this.isLoading = true;
    this.personaNaturalService.storePersonaN(this.formPersonaNatural.value).subscribe(
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
