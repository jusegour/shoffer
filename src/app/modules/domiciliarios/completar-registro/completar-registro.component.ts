import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConsumidorService } from 'src/app/core/services/consumidor.service';
import { DomiciliarioService } from 'src/app/core/services/domiciliario.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  formDomiciliario: FormGroup;
  isLoading: boolean;
  idDomiciliario: number;

  constructor(
    private fb: FormBuilder,
    private domiciliarioService: DomiciliarioService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDomiciliario = this.fb.group({
      nombre1: [null, [Validators.required]],
      nombre2: [null, []],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      tipoTransporte: [null, [Validators.required]],
      placaTransporte: [null, [Validators.required]],
      colorTransporte: [null, [Validators.required]]
    });
    this.idDomiciliario = this.authService.getIdUsuario('DOMICILIARIO');

    this.domiciliarioService
      .getDomiciliario(this.authService.getIdUsuario('DOMICILIARIO'))
      .subscribe(
        data => this.formDomiciliario.patchValue(data),
        err => console.log(err)
      );
  }

  onSubmit() {
    this.isLoading = true;

    this.domiciliarioService
      .updateDomiciliario(this.idDomiciliario, this.formDomiciliario.value)
      .subscribe(
        data => {
          this.isLoading = false;
          alert(data.message);
          localStorage.setItem('DOMICILIARIO_TOKEN', data.token);
          this.router.navigate(['/domiciliarios']);
        },
        err => {
          this.isLoading = false;
          console.error(err);
        }
      );
  }
}
