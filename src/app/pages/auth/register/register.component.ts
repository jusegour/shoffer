import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formUsuarioConsumidor: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formUsuarioConsumidor = this.fb.group({
      nombre1: [null],
      apellido1: [null],
      correo: [null],
      password: [null],
      repetPassword: [null]
    });
  }
}
