import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendedorService } from 'src/app/core/services/vendedor.service';

@Component({
  templateUrl: './insertar-vendedor.component.html',
  styleUrls: ['./insertar-vendedor.component.css']
})
export class InsertarVendedorComponent implements OnInit {
  formVendedor: FormGroup;
  formPersonaNatural: FormGroup;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private vendedorService: VendedorService) {}

  ngOnInit(): void {
    this.formVendedor = this.fb.group({
      nit: [null, [Validators.required]],
      correo: [null, [Validators.required,Validators.email]]
    });
  }

  get f(){
    return this.formVendedor.controls;
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
}
