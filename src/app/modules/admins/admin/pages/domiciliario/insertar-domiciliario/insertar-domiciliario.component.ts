import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomiciliarioService } from 'src/app/core/services/domiciliario.service';

@Component({
  templateUrl: './insertar-domiciliario.component.html',
  styleUrls: ['./insertar-domiciliario.component.css']
})
export class InsertarDomiciliarioComponent implements OnInit {
  formDomiciliario: FormGroup;
  formPersonaNatural: FormGroup;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private domiciliarioService: DomiciliarioService) {}

  ngOnInit(): void {
    this.formDomiciliario = this.fb.group({
      tipoDocumento: [null, [Validators.required]],
      numDocumento: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.domiciliarioService.storeDomiciliario(this.formDomiciliario.value).subscribe(
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
