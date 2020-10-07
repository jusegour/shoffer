import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  formUsuarioConsumidor: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formUsuarioConsumidor = this.fb.group({
      nombre1: [null, [Validators.required]],
      nombre2: [null, []],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });
  }

  onSubmit() {}
}
