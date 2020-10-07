import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioConsumidorService } from 'src/app/core/services/usuario-consumidor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formUsuarioConsumidor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioConsumidorService: UsuarioConsumidorService
  ) {}

  ngOnInit(): void {
    this.formUsuarioConsumidor = this.fb.group({
      nombre1: [null],
      apellido1: [null],
      correo: [null],
      password: [null],
      repetPassword: [null]
    });
  }

  onSubmit() {
    this.usuarioConsumidorService.storeUsuario(this.formUsuarioConsumidor.value).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
